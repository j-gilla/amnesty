import DateOfIncident from './questions/date-of-incident';
import DateOfInvestigation from './questions/date-of-investigation';
import VerifyIncidentCauseEni from './questions/verify-incident-cause-eni';
import VerifySpillPointCoordinates from './questions/verify-spill-point-coordinates';

export default [
  {
    ...DateOfIncident,
    position_in_asset: {
      top_in_percent: 14.3, height_in_percent: 1.8
    }
  },
  {
    ...DateOfInvestigation,
    position_in_asset: {
      top_in_percent: 16.4, height_in_percent: 1.8
    }
  },
  {
    ...VerifyIncidentCauseEni,
    position_in_asset: {
      top_in_percent: 19.6, height_in_percent: 6.1
    }
  },
  {
    ...VerifySpillPointCoordinates(2),
    position_in_asset: {
      top_in_percent: 35.3, height_in_percent: 2.4
    }
  }
];