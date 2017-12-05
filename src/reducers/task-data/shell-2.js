import DateOfIncident from './questions/date-of-incident';
import DateOfInvestigation from './questions/date-of-investigation';
import VerifyLeakPointLessOptions from './questions/verify-leak-point-less-options';
import VerifySpillPointCoordinates from './questions/verify-spill-point-coordinates';

export default [
  {
    ...DateOfIncident,
    position_in_asset: {
      top_in_percent: 4, height_in_percent: 0.7
    }
  },
  {
    ...DateOfInvestigation,
    position_in_asset: {
      top_in_percent: 4.4, height_in_percent: 0.7
    }
  },
  {
    ...VerifyLeakPointLessOptions,
    position_in_asset: {
      top_in_percent: 6, height_in_percent: 3.8
    }
  },
  {
    ...VerifySpillPointCoordinates(),
    position_in_asset: {
      top_in_percent: 10, height_in_percent: 1.6
    }
  }
];
