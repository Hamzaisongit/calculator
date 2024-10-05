# Project storey

## Stack
- react
- redux
- netlify

## something new i came across
- thought about making many different buttons based on a common logic which would differ bsed on the type prop passes to the button component
- finding the abstract or common logic among components for modulariry and reusability

## UI flow
- nothing much, a simple calculator

## Data flow
- whatever button is pressed it's value is added to the expression string maintained in slice1, through dispatch methode.
  - the reducer for this functionaity is stored in slice1
- when '=' is pressed then the expression string is evaluated
- if the expression format is invalid somehow then generated error is catched and handled through alert
