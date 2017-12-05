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
      label: 'Sabotage (Crude theft)',
      value: 'Sabotage (Crude theft)'
    },
    {
      id: 3,
      label: 'Sabotage (Line theft)',
      value: 'Sabotage (Line theft)',
    },
    {
      id: 4,
      label: 'Sabotage (Accidental 3rd party damage)',
      value: 'Sabotage (Accidental 3rd party damage)',
    },
    {
      id: 5,
      label: 'Operational',
      value: 'Operational'
    },
    {
      id: 6,
      label: 'Others (including mystery spills)',
      value: 'Others (including mystery spills)',
    }
  ],
  project: "cause"
}