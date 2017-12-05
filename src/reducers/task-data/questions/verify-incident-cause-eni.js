export default {
  max_answer_num: undefined,
  type: "CHOICE",
  header: "VERIFY THE INCIDENT CAUSE",
  title: 'Verify Incident Cause',
  content: 'Which option are ticked/checked?',
  description: "Please look at the highlighted section of the document and let us know which options are checked/ticked by choosing options below",
  options: [
    {
      id: 1,
      label: 'Corrosion',
      value: 'Corrosion',
    },
    {
      id: 2,
      label: 'Equipment failure',
      value: 'Equipment failure'
    },
    {
      id: 3,
      label: 'Human error',
      value: 'Human error',
    },
    {
      id: 4,
      label: 'Third party interference',
      value: 'Third party interference',
    },
    {
      id: 5,
      label: 'Operational error',
      value: 'Operational error',
    },
    {
      id: 6,
      label: 'Mystery spill',
      value: 'Mystery spill'
    },
    {
      id: 7,
      label: 'Other',
      value: 'Other',
    }
  ],
  project: "cause"
}