/** @module MessageCard */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Button from '~components/atoms/Button/Button';
import '~components/molecules/CardShell/Cards.scss';
import CardShell from '~components/molecules/CardShell/CardShell';
import '~components/molecules/CardSummaries/CardSummaries.scss';
import './MessageCard.scss';

const MessageCard = ({
  beforeButton,
  className,
  description,
  editCard,
  featureImage,
  hasError,
  isCollapsed,
  isLatestCard,
  title,
  ...props
}) => {
  const cardClass = classNames(
    {
      'uic--mcgonagall-message-card': true,
    },
    className,
  );

  const descriptionNode =
    typeof description === 'string' ? <p>{description}</p> : description;

  const isIncompleteCollapsedCard = isCollapsed && isLatestCard;

  const content = (
    <div className="uic--card-titleset uic--text-center">
      {featureImage && (
        <div className="uic--card-feature-image">{featureImage}</div>
      )}

      <h2>{title}</h2>
      {isIncompleteCollapsedCard ? (
        <Fragment>
          <p>Pick up where you left off</p>
          <Button variant="link" onClick={editCard}>
            Resume
          </Button>
        </Fragment>
      ) : (
        descriptionNode
      )}
    </div>
  );

  return (
    <CardShell
      {...props}
      beforeButton={beforeButton}
      className={cardClass}
      hasError={isIncompleteCollapsedCard || hasError}
      isCollapsed={isCollapsed}
      summary={<div className="uic--card-message-summary">{content}</div>}
    >
      {content}
    </CardShell>
  );
};

MessageCard.propTypes = {
  /** Enables browser auto complete. */
  autoComplete: PropTypes.bool,
  /** Whether it should animate on mount */
  animate: PropTypes.bool,
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button. */
  buttonText: PropTypes.string,
  /** Additional class names to apply to the button. */
  className: PropTypes.string,
  /** The cards description. */
  description: PropTypes.node,
  /** Forces the button to be disabled. */
  disabled: PropTypes.bool,
  /** Applies additional class names to the button. */
  editCard: PropTypes.func,
  /** Use to display a feature image or other content at the top of the card. */
  featureImage: PropTypes.node,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Hides the button. */
  hideButton: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary. */
  isLatestCard: PropTypes.bool,
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching: PropTypes.bool,
  /** Shows a loading indicator on the button for actions after the button is clicked. */
  loading: PropTypes.bool,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** The index of this card in the flow, used for animation purposes */
  stepIndex: PropTypes.number,
  /** The title of the card. */
  title: PropTypes.node.isRequired,
};

export default MessageCard;
