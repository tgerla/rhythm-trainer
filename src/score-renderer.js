import { Renderer, Stave, StaveNote, Voice, Formatter, Beam } from 'vexflow'

import { getAn8thPattern } from './eighth'
import { getA16thPattern } from './sixteenth'
import { random } from "./util";

function setupVex(divisions, container) {
    const renderer = new Renderer(container, Renderer.Backends.CANVAS);

    var width;
    console.log("divisions:", divisions)
    switch (divisions) {
        case "8":
            width = 500;
            break;
        case "16":
            width = 620;
            break;
        default:
            alert("yyy invalid state for divisions:", divisions.value)
    }

    // Configure the rendering context.
    renderer.resize(width, 100);
    const context = renderer.getContext();

    const stave = new Stave(0, 0, width - 1, { num_lines: 1 });
    stave.setContext(context).draw();

    return [stave, context, width];
}

function renderVex(notes, beams, context, stave, width, beats = 4) {
    const voice = new Voice({ num_beats: beats, beat_value: 4 });
    voice.addTickables(notes);

    new Formatter().joinVoices([voice]).format([voice], width - 30);

    voice.draw(context, stave);
    beams.forEach((b) => {
        b.setContext(context).draw();
    });
}

export function renderScore(divisions, container) {
    let [stave, context, width] = setupVex(divisions, container);

    var notes = [];
    var beams = [];

    var noteColor;
    for (var i = 0; i < 4; i++) {
        var note;
        var beam;

        // alternate note color
        noteColor = i % 2 === 0 ? "green" : "black";

        if (divisions === "8") {
            ({ note, beam } = getAn8thPattern(random(3)));
        } else if (divisions === "16") {
            ({ note, beam } = getA16thPattern(random(16)));
        } else {
            alert("invalid state for divisions:", divisions)
        }

        note.forEach((n) => {
            n.setStyle({ fillStyle: noteColor, strokeStyle: noteColor });
        })
        beam.forEach((b) => {
            b.setStyle({ fillStyle: noteColor, strokeStyle: noteColor });
        })
        beams = beams.concat(beam);
        notes = notes.concat(note);
    }

    renderVex(notes, beams, context, stave, width);
}

export function renderScoreTests(divisions, patternIndex, container) {
    let [stave, context, width] = setupVex(divisions, container);

    var note;
    var beam;

    switch (divisions) {
        case "8":
            ({ note, beam } = getAn8thPattern(patternIndex));
            break;
        case "16":
            ({ note, beam } = getA16thPattern(patternIndex));
            break;
        default:
            alert("xxx invalid state for divisions:", divisions.value)
    }
    renderVex(note, beam, context, stave, width, 1);
}