import DateOfIncident from './questions/date-of-incident';
import DateOfInvestigation from './questions/date-of-investigation';
import VerifyIncidentCauseEni from './questions/verify-incident-cause-eni';
import VerifySpillPointCoordinates from './questions/verify-spill-point-coordinates';

export default [
  {
    ...DateOfIncident,
    position_in_asset: {
      top_in_percent: 15, height_in_percent: 1.8
    }
  },
  {
    ...DateOfInvestigation,
    position_in_asset: {
      top_in_percent: 17.1, height_in_percent: 1.8
    }
  },
  {
    ...VerifyIncidentCauseEni,
    position_in_asset: {
      top_in_percent: 20.6, height_in_percent: 6.3
    }
  },
  {
    ...VerifySpillPointCoordinates(),
    position_in_asset: {
      top_in_percent: 36.4, height_in_percent: 2.5
    }
  }
];