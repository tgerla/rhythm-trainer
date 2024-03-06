import { StaveNote, Beam } from "vexflow";
import { random } from "./util";

export function getARandom8th() {
    var note = [];
    var beam = [];
    switch (random(3)) {
        case 1: // Quarter note
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "q"
            }));
            break;
        case 2: // eighth rest and eighth note
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "8r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "8"
            }));
            break;
        case 3: // two eighth notes beamed
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "8"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "8"
            }));
            beam = [new Beam(note)];
            break;
    }
    return { note, beam };
}