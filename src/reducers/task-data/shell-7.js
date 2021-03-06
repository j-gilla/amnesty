import DateOfIncident from './questions/date-of-incident';
import DateOfInvestigation from './questions/date-of-investigation';
import VerifyLeakPoint from './questions/verify-leak-point';
import VerifyIncidentCause from './questions/verify-incident-cause';
import MeasuringUnit from './questions/measuring-unit';
import VerifySpillPointCoordinates from './questions/verify-spill-point-coordinates';

export default [
  {
    ...DateOfIncident,
    position_in_asset: {
      top_in_percent: 3.8, height_in_percent: 0.7
    }
  },
  {
    ...DateOfInvestigation,
    position_in_asset: {
      top_in_percent: 4.2, height_in_percent: 0.5
    }
  },
  {
    ...VerifyLeakPoint,
    position_in_asset: {
      top_in_percent: 6.8, height_in_percent: 2.1
    }
  },
  {
    ...VerifyIncidentCause,
    position_in_asset: {
      top_in_percent: 8.8, height_in_percent: 0.9
    }
  },
  {
    ...MeasuringUnit,
    position_in_asset: {
      top_in_percent: 13.1, height_in_percent: 0.7
    }
  },
  {
    ...VerifySpillPointCoordinates(),
    position_in_asset: {
      top_in_percent: 13.1, height_in_percent: 1.7
    }
  }
];
