import {shallow} from 'enzyme';
import React from 'react';
import test from 'tape';
import InfoBoxFormattedRows from './InfoBoxFormattedRows';

test('InfoBoxFormattedRows - renders correctly', (t) => {
  const testProps = {
    rowData: [
      {
        label: 'data point 1',
        value: '60%',
      },
      {
        label: 'data point 2',
        value: '40%',
      },
    ],
  };

  const component = shallow(<InfoBoxFormattedRows {...testProps} />);

  t.equal(
    component.find('.uic--info-box-formatted-row').length,
    testProps.rowData.length,
    'Should render the correct number of rows',
  );
  t.true(
    component.find('.uic--info-box-formatted-row').get(0).key,
    'Key should be created on our behalf',
  );

  t.end();
});
