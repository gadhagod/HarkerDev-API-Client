/**
 * @class Lunch
 * @docs https://bell.harker.org/docs/api.html#get-lunchmenu
 */
export class Lunch {
    /**
     * Date of data
     * @type {!string}
     * @memberof Lunch
     */
    date!: string
    /**
     * Lunch of the day
     * @type {!{place: string, food: string}[]}
     * @memberof Lunch
     */
    lunch!: {
        place: string, 
        food: string
    }[]
    /**
     * Get all open food places of the day
     * @type {void}
     * @returns {string[]}
     * @memberof Lunch
     */
    getPlaces(): string[] { return this.lunch.map((item) => item.place) }
    /**
     * Get all food of the day
     * @type {void}
     * @returns {string[]}
     * @memberof Lunch
     */
    getFoods(): string[] { return this.lunch.map((item) => item.food) }
}

/**
 * @class Schedule
 * @docs https://bell.harker.org/docs/api.html#get-schedule
 */
export class Schedule {
    /**
     * Date of data
     * @type {!string}
     * @memberof Schedule
     */
    date!: string
    /**
     * Letter code of schedule
     * @type {!string}
     * @memberof Schedule
     */
    code!: string
    /**
     * Indication of special schedules
     * @type {?string}
     * @memberof Schedule
     */
    variant?: string
    /**
     * Name of modified schedule
     * @type {?string}
     * @memberof Schedule
     */
    name?: string
    /**
     * Schedule of the day
     * @type {!{start: string, end: string, name: string}[]}
     * @memberof Schedule
     */
    schedule!: {
        start: string, 
        end: string, 
        name: string
    }[]
}

/**
 * @class Events
 * @docs https://bell.harker.org/docs/api.html#get-events
 */
export class Events {
    /**
     * Date of data
     * @type {!string}
     * @memberof Events
     */
    date!: string
    /**
     * Events of the day
     * @type {!{name: string, start: string, end: string, category: "schoolwide" | "academics" | "important" | "athspirit" | "extra" | "perfarts" | "clubs" | "special" | "info" | "other"}[]}
     * @memberof Events
     */
    events!: {
        name: string, 
        start: string, 
        end: string, 
        category: "schoolwide" | "academics" | "important" | "athspirit" | "extra" | "perfarts" | "clubs" | "special" | "info" | "other"
    }[]
}

/**
 * @interface lunchCallback
 */
export interface lunchCallback {
    (res: Lunch): void
}

/**
 * @interface scheduleCallback
 */
export interface scheduleCallback {
    (res: Schedule): void
}

/**
 * @interface eventsCallback
 */
export interface eventsCallback {
    (res: Events): void
}