export default {
  type: "CHOICE",
  max_answer_num: 1,
  header: "VERIFY THE MEASURING UNIT",
  title: 'Measuring Unit',
  content: 'Which option are ticked/checked?',
  description: "Please let us know the measuring unit as displayed in the highlighted area",
  options: [
    {
      id: 1,
      label: 'WGS84 (Latitude/Longitude)',
      value: 'WGS',
    },
    {
      id: 2,
      label: 'Northing/Easting',
      value: 'NE',
    },
    {
      id: 3,
      label: 'Nigerian Measuring Unit',
      value: 'NMU'
    },
    {
      id: 4,
      label: 'MINNA',
      value: 'MINNA'
    }
  ],
  answers: [],
  project: "location"
}