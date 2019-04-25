export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore.collection('project').add({
      ...project,
      createdAt: new Date(),
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authhorId: authorId,
      carName: project.carName,
      carPrice: project.carPrice,
      carDescription: project.carDescription
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })

  }
}