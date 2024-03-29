/** @module InputCard */
import PropTypes from 'prop-types';
import React from 'react';
import Input from '~components/atoms/Input/Input';
import {
  currencyMasks,
  percentageMasks,
} from '~components/atoms/Input/Input.masks';
import SimpleSummary from '~components/molecules/CardSummaries/SimpleSummary/SimpleSummary';
import QuestionCard from '~components/organisms-simple/QuestionCard/QuestionCard';

/** Displays the InputCard component.
 * @param {object} props - Component props.
 * @returns {JSX} - JSX representation of the InputCard component.
 */
const InputCard = ({
  answers,
  editCard,
  config,
  onChange,
  shortTitle,
  title,
  ...props
}) => {
  // Automatically prepend/append depending on type of mask if answers is not passed through
  const answer = answers
    ? answers
    : currencyMasks.includes(config.mask)
    ? [`$${config.value}`]
    : percentageMasks.includes(config.mask)
    ? [`${config.value}%`]
    : [config.value];

  return (
    <QuestionCard
      {...props}
      editCard={editCard}
      shortTitle={shortTitle}
      title={title}
      summary={
        <SimpleSummary
          answers={answer}
          editCard={editCard}
          shortTitle={shortTitle || title}
        />
      }
    >
      <Input {...config} onChange={onChange} required />
    </QuestionCard>
  );
};

export default InputCard;

InputCard.propTypes = {
  /** Values to pass into input group */
  config: PropTypes.shape({
    /** A string or symbol to append to the end of the input. For example `%`. */
    append: PropTypes.string,
    /** A string or symbol to pre-pend to the start of the input. For example `$`. */
    prepend: PropTypes.string,
    /** The label representing the input field. */
    label: PropTypes.string.isRequired,
    /** The name of the input field. */
    name: PropTypes.string.isRequired,
    /** The description of the input field. Displayed separately to the label. */
    description: PropTypes.string,
    /** The type of input field. */
    type: PropTypes.oneOf([
      'date',
      'datetime-local',
      'email',
      'file',
      'hidden',
      'month',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week',
    ]),
    /** The placeholder text of the input field. This is displayed if there's no value. */
    placeholder: PropTypes.string,
    /** The current value of the input field.  */
    value: PropTypes.string,
    /** The regex pattern that determines what input characters are allowed. Validates on form submission. */
    pattern: PropTypes.string,
    /** The max length of the input field value. */
    maxLength: PropTypes.number,
    /** Allows you to select which input type is allowed in the field. */
    mask: PropTypes.oneOf([
      'PhoneNumber',
      'SsnNumber',
      'Date',
      'Month',
      'Zip',
      'Ticker',
      'CommaSeparated',
      'Currency',
      'CurrencyAllowNegative',
      'Number',
      'PercentageWithDecimal',
      'SmallPercentageWithDecimal',
    ]),
    /** The minimum number value. Only applicable if the type is set to number. */
    min: PropTypes.number,
    /** The maximum number value. Only applicable if the type is set to number. */
    max: PropTypes.number,
    /** The value step increment. Only applicable if the type is set to number. */
    step: PropTypes.number,
    /** The error message to display when the input fails validation. */
    validationErrorMsg: PropTypes.string,
    /** Runs the validation logic on every blur event if toggled as true. */
    validateOnBlur: PropTypes.bool,
    /** Sets the ref to the input. */
    setRef: PropTypes.func,
    /** Hides the validation message under the defined conditions. */
    hideValidity: PropTypes.func,
    /** Validates the input based on the provided logic. */
    isValid: PropTypes.func,
    /** Forces the input into an error state. */
    error: PropTypes.bool,
    /** Sanitizes the input when passed back by the onChange handler. */
    sanitize: PropTypes.bool,
  }),
  /** Whether it should animate on mount */
  animate: PropTypes.bool,
  /** The card answer(s) to show in the collapsed summary. If not provided, will use the label of the seleted value */
  answers: PropTypes.arrayOf(PropTypes.string),
  /** Enables browser auto complete. */
  autoComplete: PropTypes.bool,
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button */
  buttonText: PropTypes.string,
  /** Handler to cancel the changes. */
  cancelChanges: PropTypes.func,
  /** Additional class names to apply to the card. */
  className: PropTypes.string,
  /** Whether making changes should clear out any changes made in steps after this. */
  clearFuture: PropTypes.bool,
  /** The card description. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Forces the disabled state of the button. */
  disabled: PropTypes.bool,
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: PropTypes.func,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary. */
  isLatestCard: PropTypes.bool,
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching: PropTypes.bool,
  /** Shows a loading indicator on the button for actions after the button is clicked. */
  loading: PropTypes.bool,
  /** Displays a Cabinet component beneath the question, suitable for displaying additional information about the card. */
  moreDetails: PropTypes.shape({
    /** The contents of the cabinet. */
    cabinetContent: PropTypes.node.isRequired,
    /** The header to display at the top of the cabinet. */
    header: PropTypes.string.isRequired,
    /** Determines if the cabinet is visible when the page is printed or not. */
    visibleInPrint: PropTypes.bool,
    /** Adds a label to open the cabinet. */
    label: PropTypes.string.isRequired,
  }),
  /** The handler to fire when a change happens. */
  onChange: PropTypes.func.isRequired,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** Output defaults to fallback to on continue if an output is empty. The key should be the output name and the value should be the default value */
  outputDefaults: PropTypes.shape({}),
  /** Shorter title to be used with the card summary. */
  shortTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The index of this card in the flow, used for animation purposes */
  stepIndex: PropTypes.number,
  /** The title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
