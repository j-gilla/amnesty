import DateOfIncident from './questions/date-of-incident';
import DateOfInvestigation from './questions/date-of-investigation';
import VerifyLeakPoint from './questions/verify-leak-point';
import VerifyIncidentCauseLessOptions from './questions/verify-incident-cause-less-options';
import MeasuringUnit from './questions/measuring-unit';
import VerifySpillPointCoordinates from './questions/verify-spill-point-coordinates';
import AreaOfImpact from './questions/area-of-impact';

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
      top_in_percent: 4.18, height_in_percent: 0.7
    }
  },
  {
    ...VerifyLeakPoint,
    position_in_asset: {
      top_in_percent: 5.5, height_in_percent: 2.8
    }
  },
  {
    ...VerifyIncidentCauseLessOptions,
    position_in_asset: {
      top_in_percent: 8.1, height_in_percent: 0.7
    }
  },
  {
    ...MeasuringUnit,
    position_in_asset: {
      top_in_percent: 8.7, height_in_percent: 0.7
    }
  },
  {
    ...VerifySpillPointCoordinates(),
    position_in_asset: {
      top_in_percent: 8.7, height_in_percent: 2.4
    }
  },
  {
    ...AreaOfImpact,
    position_in_asset: {
      top_in_percent: 35.3, height_in_percent: 2.4
    }
  }
];