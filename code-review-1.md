# Notes for Code Review 1

## Schema Design

- Understand how you will be structuring your data in Firebase
- Understand how it differs from doing a predefined PostgreSQL schema
- Identify the tradeoffs and possible situations of when you will use each type of database (Document vs. Regular SQL)

### Firebase Data Modeling Resources

- [Structuring Data in Firebase](https://firebase.google.com/docs/database/ios/structure-data)
- [Firebase Data Modeling](https://howtofirebase.com/firebase-data-modeling-939585ade7f4)
- [How to Structure Firebase Data](https://howtofirebase.com/firebase-data-modeling-939585ade7f4)
- [Modeling Relational Data in Firestore](https://www.youtube.com/watch?v=jm66TSlVtcc)

## To Redux or Not to Redux

- We discussed that if Redux is used, it should be "all in"; not some Redux and some local state
- If you were to use local state, understand where state would live relative to parent, child and "sibling" components
- It (Redux) adds another layer of abstraction

## Project Board

- More semantic project board. Make it such that someone that reads it knows exactly what is going on and what the app is.

## Async/Await

- Understand promises and .then

## Other

- How does your architecture differ from the typical architecture you have learned so far?