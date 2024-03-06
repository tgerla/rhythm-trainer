import { Renderer, Stave, StaveNote, Voice, Formatter, Beam } from 'vexflow'

import { getARandom8th } from './eighth'
import { getARandom16th } from './sixteenth'

export function renderScore(divisions, container) {
    const renderer = new Renderer(container, Renderer.Backends.CANVAS);

    // Configure the rendering context.
    renderer.resize(621, 100);
    const context = renderer.getContext();

    const stave = new Stave(0, 0, 620);
    stave.setContext(context).draw();


    var notes = [];
    var beams = [];

    var noteColor;
    for (var i = 0; i < 4; i++) {
        var note;
        var beam;

        // alternate note color
        noteColor = i % 2 === 0 ? "blue" : "black";

        if (divisions.value === "8") {
            ({ note, beam } = getARandom8th());
        } else if (divisions.value === "16") {
            ({ note, beam } = getARandom16th());
        } else {
            alert("invalid state for divisions:", divisions.value)
            divisions.value = "8"
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

    // Create a voice in 4/4 and add above notes
    const voice = new Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    new Formatter().joinVoices([voice]).format([voice], 590);

    // Render voice
    voice.draw(context, stave);
    beams.forEach((b) => {
        b.setContext(context).draw();
    });
}