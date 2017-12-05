export default {
  max_answer_num: 1,
  type: "TEXT_INPUT",
  header: 'VERIFY THE DATE OF INVESTIGATION',
  title: 'Date of investigation',
  content: 'Please verify the date shown',
  description: "Please look at the highlighted section of the document and let us know the date of investigation",
  fields_of_answer: [{
    "name": "date",
    "label": "date",
    "type": "date"
  }],
  project: "cause"
};