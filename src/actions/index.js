

export const nextQuestion = () => {
  return {
    type: 'NEXT_QUESTION'
  }
}
export const prevQuestion = () => {
  return {
    type: 'PREV_QUESTION'
  }
}
export * from './fetchTask';
export * from './userProfile';