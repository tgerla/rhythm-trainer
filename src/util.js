import { StaveNote } from "vexflow";

// Returns a random integer between 1 and x
export function random(x) {
    return Math.floor(Math.random() * x) + 1;
}

export function createStaveNote(key, duration) {
    return new StaveNote({
        keys: [key],
        duration: duration
    });
}
