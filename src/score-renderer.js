import { Renderer, Stave, StaveNote, Voice, Formatter, Beam } from 'vexflow'

function getRandomImageNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

export function renderScore(container) {
    const renderer = new Renderer(container, Renderer.Backends.CANVAS);

    // Configure the rendering context.
    renderer.resize(400, 100);
    const context = renderer.getContext();

    const stave = new Stave(0, 0, 399);
    stave.setContext(context).draw();


    var notes = [];
    var beams = [];
    for (var i = 0; i < 4; i++) {
        var note = [];
        var beam = [];
        switch (getRandomImageNumber()) {
            case 1:
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "q"
                }));
                break;
            case 2:
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "8r"
                }));
                note.push(new StaveNote({
                    keys: ["a/4"],
                    duration: "8"
                }));
                break;
            case 3:
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
        beams = beams.concat(beam);
        notes = notes.concat(note);
    }

    // Create a voice in 4/4 and add above notes
    const voice = new Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    new Formatter().joinVoices([voice]).format([voice], 380);

    // Render voice
    voice.draw(context, stave);
    beams.forEach((b) => {
        b.setContext(context).draw();
    });

}