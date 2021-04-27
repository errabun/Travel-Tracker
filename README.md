# Travel Tracker

## A Turing School of Software & Design mod 2 final project by [Eric Rabun](https://github.com/errabun)

---

## Introduction
The goals of this project were to demonstrate fluency in several front-end design and development principles that we have been exposed to throughout the first two modules of the Turing program.  The basic premise of this project was to develop a travel application that a user can track their upcoming and past trips, book new trips, and keep track of the amount of money spent on travel YTD as well as the previous year.  The goals as stated in the project spec are as follows:
 - Use OOP to drive the design of the application and the code
 - Work with an API to send and receive data
 - Solidify the code review process
 - Create a robust test suite that thoroughly tests all functionality of a client-side application

---

## Features
This was my first experience with implementing a login page, using get/post request from API servers and manipulating the data that was returned from those requests in a project.  

Once on the webpage, you will need to login.  The username is "traveler<id>" where id is any number between 1 - 50.  The password for login is "travel2020". You will see an error message if invalid credentials are used on the login page. 

![](https://media.giphy.com/media/Zg2cGpa2GDR4Qr4e90/giphy.gif)

---
Once logged into the page, it will automatically be populated based on the information fetched from the API that is storing a dataset.  By utilizing different id's when logging in you will be able to access a number of different users data.  On the main page, you will see a welcome card that shows that users amount of money they have spent on trips for the past year as well as the current YTD.  You will be able to book a trip by filling out the next displayed card by selecting a destination, departure date, duration of trip, and number of travelers.  You will first see an estimate for each person on the trip, the total for all travelers, and the total with a 10% agent fee.  Once the user is able to review the cost of the trip they will be able to 'book this trip' and must confirm before the 'pending' trip is added to 'My Trips' section.

![](https://media.giphy.com/media/pfKEVRAHhINztKEBpu/giphy.gif)

---

## Technologies Implemented: 
- JavaScript
- HTML
- CSS/Sass
- API Fetch requests (GET & POST)
- Git

---

## Check out my GitHub page 

You can find my project [here](https://errabun.github.io/travel-tracker/)

Have fun playing around with it!
