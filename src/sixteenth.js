import { StaveNote, Beam } from "vexflow";
import { random } from "./util";

export function getA16thPattern(idx) {
    var note = [];
    var beam = [];
    switch (idx) {
        case 1: // note rest rest rest
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            break;
        case 2: // rest note rest rest
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            break
        case 3: // rest rest note rest
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            break;
        case 4: // rest rest rest note
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            break;
        case 5: // note note rest rest
            {
                const beamedNotes = [
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    }),
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    })
                ]
                beam = [new Beam(beamedNotes)];
                note = note.concat(beamedNotes);

                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }));
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }));
            }
            break;
        case 6: // rest note note rest
            {
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }));

                const beamedNotes = [
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    }),
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    })
                ]

                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }));
            }
            break;
        case 7: // rest rest note note
            {
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }))
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }))

                const beamedNotes = [
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    }),
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    })
                ]
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 8: // rest note rest note
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            break;
        case 9: // note rest note rest
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            break;
        case 10: // note rest rest note
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16"
            }));
            break;
        case 11: // note note note rest
            {
                const beamedNotes = [
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    }),
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    }),
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    })
                ]
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }));
            }
            break;
        case 12: // rest note note note
            {
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }));
                const beamedNotes = [
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    }),
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    }),
                    new StaveNote({
                        keys: ["a/4"],
                        duration: "16"
                    })
                ]
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 13: // note rest note note
            {
                const beamedNotes = []
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 14: // note note rest note
            {
                const beamedNotes = []
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16r"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 15: // note note note note
            {
                const beamedNotes = []
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                beamedNotes.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "16"
                }));
                note = note.concat(beamedNotes);
                beam = [new Beam(beamedNotes)];
            }
            break;
        case 16: // rest rest rest rest
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            note.push(new StaveNote({
                keys: ["a/4"],
                duration: "16r"
            }));
            break;
        default:
            console.log("invalid index for 16th note pattern:", idx);
    }
    return { note, beam };
}