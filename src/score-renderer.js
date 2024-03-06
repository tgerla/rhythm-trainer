import { Renderer, Stave, StaveNote, Voice, Formatter, Beam } from 'vexflow'

// Function to get a random number between 1 and 3
function getRandomImageNumber() {
    return Math.floor(Math.random() * 3) + 1; // Adjust based on the number of images
}

// Function to display random images
export function displayRandomImages(container) {
    const renderer = new Renderer(container, Renderer.Backends.CANVAS);

    // Configure the rendering context.
    renderer.resize(500, 150);
    const context = renderer.getContext();

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new Stave(50, 40, 400);

    // Add a clef and time signature.
    //            stave.addClef("treble").addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
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
    new Formatter().joinVoices([voice]).format([voice], 350);

    // Render voice
    voice.draw(context, stave);
    beams.forEach((b) => {
        b.setContext(context).draw();
    });

}