import DateOfIncident from './questions/date-of-incident';
import DateOfInvestigation from './questions/date-of-investigation';
import VerifyLeakPoint from './questions/verify-leak-point';
import VerifyIncidentCause from './questions/verify-incident-cause';
import MeasuringUnit from './questions/measuring-unit';
import VerifySpillPointCoordinates from './questions/verify-spill-point-coordinates';

VerifyLeakPoint.options = VerifyLeakPoint.options.filter(opt => {
    return (opt.value !== "Corrosion" && opt.value !== "Com unit failure");
});

export default [
  {
    ...DateOfIncident,
    position_in_asset: {
      top_in_percent: 5, height_in_percent: 0.7
    }
  },
  {
    ...DateOfInvestigation,
    position_in_asset: {
      top_in_percent: 5.4, height_in_percent: 0.7
    }
  },
  {
    ...VerifyLeakPoint,
    position_in_asset: {
      top_in_percent: 8.7, height_in_percent: 2.5
    }
  },
  {
    ...VerifyIncidentCause,
    position_in_asset: {
      top_in_percent: 11, height_in_percent: 1.1
    }
  },
  {
    ...MeasuringUnit,
    position_in_asset: {
      top_in_percent: 16.1, height_in_percent: 1
    }
  },
  {
    ...VerifySpillPointCoordinates(),
    position_in_asset: {
      top_in_percent: 16.1, height_in_percent: 2.4
    }
  }
];
