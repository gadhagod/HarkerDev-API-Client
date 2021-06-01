# Harker Bell Schedule API Client
Nodejs wrapper for the Harkerdev bell schedule API, serving data on Harker lunch, schedules, and events.

## Installation

    npm i harker-api

## Usage

    const api = new (require("harker-api")).HarkerApi() // Initialize HarkerApi class

    api.getLunch(28, 5, 2021, console.log) // get lunch of May 28, 2021 and log it
    api.getSchedule(28, 5, 2021, console.log) // get schedule and log
    api.getEvents(28, 5, 2021, console.log) // get events and log