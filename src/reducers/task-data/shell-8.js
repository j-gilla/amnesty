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
      top_in_percent: 5.3, height_in_percent: 0.7
    }
  },
  {
    ...DateOfInvestigation,
    position_in_asset: {
      top_in_percent: 5.7, height_in_percent: 0.7
    }
  },
  {
    ...VerifyLeakPoint,
    position_in_asset: {
      top_in_percent: 9.3, height_in_percent: 2.8
    }
  },
  {
    ...VerifyIncidentCause,
    position_in_asset: {
      top_in_percent: 12, height_in_percent: 1.1
    }
  },
  {
    ...MeasuringUnit,
    position_in_asset: {
      top_in_percent: 16.8, height_in_percent: 0.7
    }
  },
  {
    ...VerifySpillPointCoordinates(),
    position_in_asset: {
      top_in_percent: 16.8, height_in_percent: 2.3
    }
  }
];
