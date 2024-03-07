import { Beam } from "vexflow";
import { createStaveNote } from "./util";

export function getAn8thPattern(idx) {
    var note = [];
    var beam = [];
    switch (idx) {
        case 1: // Quarter note
            note.push(createStaveNote("a/4", "q"));
            break;
        case 2: // eighth rest and eighth note
            note.push(createStaveNote("a/4", "8r"));
            note.push(createStaveNote("a/4", "8"));
            break;
        case 3: // two eighth notes beamed
            note.push(createStaveNote("a/4", "8"));
            note.push(createStaveNote("a/4", "8"));
            beam = [new Beam(note)];
            break;
        default:
            console.log("invalid index for 8th note pattern:", idx);
    }
    return { note, beam };
}