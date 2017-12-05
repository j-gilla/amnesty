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
      label: 'Third party interference',
      value: 'Third party interference',
    },
    {
      id: 2,
      label: 'Operational',
      value: 'Operational'
    },
    {
      id: 3,
      label: 'Others',
      value: 'Others',
    }
  ],
  project: "cause"
}