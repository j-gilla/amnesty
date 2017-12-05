export default {
  max_answer_num: 1,
  type: "TEXT_INPUT",
  header: 'VERIFY THE AREA OF IMPACT',
  title: 'Area of Impact',
  content: 'Total calculated area of impact',
  description: "Please let us know the area of impact as displayed in the highlight area.",
  fields_of_answer: [{
    "name": "area",
    "label": "area",
    "type": "number"
  }],
  unit_info: {
    title: 'Measurement type',
    selected: undefined,
    units: [{
      id: 1,
      value: 'ha',
      label: 'hectares (Ha)'
    },{
      id: 2,
      value: 'met',
      label: 'metres square (m2)'
    },{
      id: 3,
      value: 'none',
      label: "I'm not sure"
    }]
  },
  project: "location"
};