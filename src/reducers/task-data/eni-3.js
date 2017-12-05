import DateOfIncident from './questions/date-of-incident';
import DateOfInvestigation from './questions/date-of-investigation';
import VerifyIncidentCauseEni from './questions/verify-incident-cause-eni';
import VerifySpillPointCoordinates from './questions/verify-spill-point-coordinates';

export default [
  {
    ...DateOfIncident,
    position_in_asset: {
      top_in_percent: 12.6, height_in_percent: 1.6
    }
  },
  {
    ...DateOfInvestigation,
    position_in_asset: {
      top_in_percent: 14.2, height_in_percent: 1.6
    }
  },
  {
    ...VerifyIncidentCauseEni,
    position_in_asset: {
      top_in_percent: 17, height_in_percent: 4.9
    }
  },
  {
    ...VerifySpillPointCoordinates(),
    position_in_asset: {
      top_in_percent: 28.4, height_in_percent: 2.5
    }
  }
];