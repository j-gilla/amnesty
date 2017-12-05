import DateOfIncident from './questions/date-of-incident';
import DateOfInvestigation from './questions/date-of-investigation';
import VerifyIncidentCauseEni from './questions/verify-incident-cause-eni';
import VerifySpillPointCoordinates from './questions/verify-spill-point-coordinates';

export default [
  {
    ...DateOfIncident,
    position_in_asset: {
      top_in_percent: 8, height_in_percent: 1.4
    }
  },
  {
    ...DateOfInvestigation,
    position_in_asset: {
      top_in_percent: 9.2, height_in_percent: 1.4
    }
  },
  {
    ...VerifyIncidentCauseEni,
    position_in_asset: {
      top_in_percent: 10.9, height_in_percent: 3
    }
  },
  {
    ...VerifySpillPointCoordinates(),
    position_in_asset: {
      top_in_percent: 19, height_in_percent: 1.7
    }
  }
];