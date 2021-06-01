const https = require("https")
import { Lunch, Schedule, Events, lunchCallback, scheduleCallback, eventsCallback } from "./types"

export class HarkerApi {
    /**
     * Base class for HarkerAPI
     * @param {string} [url="https://bell.dev.harker.org/api"] Base URL of the API
     */
    url: string;
    constructor(baseUrl: string="https://bell.dev.harker.org/api") {
        this.url = baseUrl;
    }

    getLunch(day: number, month: number, year: number, callback: lunchCallback) {
        /**
         * Retrieve lunch for a date
         * @param {number} day day of the month
         * @param {number} month month of the year as a number
         * @param {number} year
         * @param {lunchCallback} callback function to be executed with lunch data
         */
        var req = https.get(`${this.url}/lunchmenu?day=${day}&month=${month}&year=${year}`, (httpRes: any) => {
            httpRes.on("data", (res: string | Uint8Array) => {
                var data: object;
                if (String(res.toString()).toLowerCase().includes("no lunch found.")) {
                    data = {date: new Date().toISOString(), lunch: []};
                } else {    
                    data = JSON.parse(res.toString());
                }
                callback(Object.assign(new Lunch, data));
            })
        });
        req.on("error", (error: any) => {throw new error});
        req.end();
    }

    getSchedule(day: number, month: number, year: number, callback: scheduleCallback) {
        /**
         * Retrieve schedule for a day
         * @param {number} day day of the month
         * @param {number} month month of the year as a number
         * @param {number} year
         * @param {scheduleCallback} callback function to be executed with schedule data
         */
        var req = https.get(`${this.url}/schedule?day=${day}&month=${month}&year=${year}`, (httpRes: any) => {
            httpRes.on("data", (res: string | Uint8Array) => {
                var data: object;
                if (String(res.toString).toLowerCase() == "no schedule found.") {
                    data = {date: new Date().toISOString(), schedule: []};
                } else {
                    data = JSON.parse(res.toString());
                }
                callback(Object.assign(new Schedule, data));
            })
        });
        req.on("error", (error: any) => {throw new error});
        req.end();
    }
    
    getEvents(day: number, month: number, year: number, callback: eventsCallback) {
        /**
         * Retrieve events for a day
         * @param {number} day day of the month
         * @param {number} month month of the year as a number
         * @param {number} year
         * @param {scheduleCallback} callback function to be executed with events data
         */
        var req = https.get(`${this.url}/events?day=${day}&month=${month}&year=${year}`, (httpRes: any) => {
            httpRes.on("data", (res: string | Uint8Array) => {
                var data: object;
                if (String(res.toString).toLowerCase() == "no events found.") {
                    data = {date: new Date().toISOString(), events: []};
                } else {
                    data = JSON.parse(res.toString());
                }
                callback(Object.assign(new Events, data));
            })
        });
        req.on("error", (error: any) => {throw new error});
        req.end();
    }
}

export { Lunch, Schedule, Events, lunchCallback, scheduleCallback, eventsCallback }