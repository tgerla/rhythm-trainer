import { StaveNote, Beam } from "vexflow";
import { createStaveNote } from "./util";

export function getA16thPattern(idx) {
    var note = [];
    var beam = [];
    switch (idx) {
        case 1: // note rest rest rest
            note.push(createStaveNote("a/4", "16"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            break;
        case 2: // rest note rest rest
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            break;
        case 3: // rest rest note rest
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16"));
            note.push(createStaveNote("a/4", "16r"));
            break;
        case 4: // rest rest rest note
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16"));
            break;
        case 5: // note note rest rest
            {
                const beamedNotes = [
                    createStaveNote("a/4", "16"),
                    createStaveNote("a/4", "16")
                ]
                beam = [new Beam(beamedNotes)];
                note = note.concat(beamedNotes);

                note.push(createStaveNote("a/4", "16r"));
                note.push(createStaveNote("a/4", "16r"));
            }
            break;
        case 6: // rest note note rest
            {
                note.push(createStaveNote("a/4", "16r"));

                const beamedNotes = [
                    createStaveNote("a/4", "16"),
                    createStaveNote("a/4", "16")
                ]

                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
                note.push(createStaveNote("a/4", "16r"));
            }
            break;
        case 7: // rest rest note note
            {
                note.push(createStaveNote("a/4", "16r"))
                note.push(createStaveNote("a/4", "16r"))

                const beamedNotes = [
                    createStaveNote("a/4", "16"),
                    createStaveNote("a/4", "16")
                ]
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 8: // rest note rest note
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16"));
            break;
        case 9: // note rest note rest
            note.push(createStaveNote("a/4", "16"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16"));
            note.push(createStaveNote("a/4", "16r"));
            break;
        case 10: // note rest rest note
            note.push(createStaveNote("a/4", "16"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16"));
            break;
        case 11: // note note note rest
            {
                const beamedNotes = [
                    createStaveNote("a/4", "16"),
                    createStaveNote("a/4", "16"),
                    createStaveNote("a/4", "16")
                ]
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
                note.push(createStaveNote("a/4", "16r"));
            }
            break;
        case 12: // rest note note note
            {
                note.push(createStaveNote("a/4", "16r"));
                const beamedNotes = [
                    createStaveNote("a/4", "16"),
                    createStaveNote("a/4", "16"),
                    createStaveNote("a/4", "16")
                ]
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 13: // note rest note note
            {
                const beamedNotes = []
                beamedNotes.push(createStaveNote("a/4", "16"));
                beamedNotes.push(createStaveNote("a/4", "16r"));
                beamedNotes.push(createStaveNote("a/4", "16"));
                beamedNotes.push(createStaveNote("a/4", "16"));
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 14: // note note rest note
            {
                const beamedNotes = []
                beamedNotes.push(createStaveNote("a/4", "16"));
                beamedNotes.push(createStaveNote("a/4", "16"));
                beamedNotes.push(createStaveNote("a/4", "16r"));
                beamedNotes.push(createStaveNote("a/4", "16"));
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 15: // note note note note
            {
                const beamedNotes = []
                beamedNotes.push(createStaveNote("a/4", "16"));
                beamedNotes.push(createStaveNote("a/4", "16"));
                beamedNotes.push(createStaveNote("a/4", "16"));
                beamedNotes.push(createStaveNote("a/4", "16"));
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 16: // rest rest rest rest
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            note.push(createStaveNote("a/4", "16r"));
            break;
        default:
            console.log("invalid index for 16th note pattern:", idx);
    }
    return { note, beam };
}