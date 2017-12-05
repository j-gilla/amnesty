export default (maxAnswerNumber = 1, labelSettings) => {
  if (!labelSettings) {
    labelSettings = [
      {
        "name": "northing",
        "label": "Northing",
        "type": "number",
      },
      {
        "name": "easting",
        "label": "Easting",
        "type": "number"
      }
    ];
  }
  return {
    type: "TEXT_INPUT",
    max_answer_num: maxAnswerNumber,
    fields_of_answer: labelSettings,
    header: "VERIFY THE SPILL POINT COORDINATES",
    title: 'Spill Point Coordinates',
    description: "Please let us know the Spill Point Coordinates as displayed in the highlighted area.",
    answers: [],
    project: "location"
  };
}