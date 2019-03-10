# MenloHacksProject
MenloHacks Project 2019
Perfectly Positive is a website which allows users to start their day off with a positive mindset.

## Audience
Anyone students/people who feel anxious and want to reduce their stress.

## Experience
A user opens the web app and a calendar with all the days they have practiced positivity is shown.

# Technical

## Models
- Days
  - Gratitude List
    - Makes Me Smile
    - Keeps Me Going
    - Looking Forward To

## Views
- Home (Calendar)
- Day
  - Breathing
  - Mindfulness
  - Gratitude List
- Completed motivation view

## Routes
Home
- GET `/`

Day
- GET `/day/breathe`
- GET `/day/mindfulness`
- GET `/day/gratitude/new`
- POST `/day/gratitude/`

## Other
- mongodb
- express
- bootstrap

## Extra
- multiple users
  - see what others are grateful for!
- delete function
- share function
- edit function
