<script setup>
import { ref, onMounted } from 'vue'
import { renderScore, renderScoreTests } from './score-renderer.js'

const measures = ref(1)
const divisions = ref("8")

function randomize() {
  const imageContainer1 = document.getElementById('imageContainer1');
  const imageContainer2 = document.getElementById('imageContainer2');

  imageContainer1.innerHTML = '';
  imageContainer2.innerHTML = '';
  imageContainer1.style.display = 'block';
  imageContainer2.style.display = 'none';

  renderScore(divisions.value, "imageContainer1");

  if (measures.value === "2") {
    renderScore(divisions.value, "imageContainer2");
    imageContainer2.style.display = 'block';
  }
}

onMounted(() => {
  randomize();

  /*
  for (let i = 1; i <= 3; i++) {
    const testCanvas = document.createElement('canvas');
    testCanvas.id = "testScore" + i;
    renderScoreTests("8", i, testCanvas)
    document.getElementById('tests').appendChild(testCanvas);
  }
  for (let i = 1; i <= 16; i++) {
    const testCanvas = document.createElement('canvas');
    testCanvas.id = "testScore" + i;
    renderScoreTests("16", i, testCanvas)
    document.getElementById('tests').appendChild(testCanvas);
  } */

})
</script>

<template>
  <main class="flex justify-center">
    <div class="flex flex-col justify-center mb-16">
      <h1 class="pt-4 flex justify-center">Rhythm Trainer</h1>
      <div class="flex flex-row flex-wrap justify-center max-w-screen-md">
        <canvas id="imageContainer1"> </canvas>
        <canvas id="imageContainer2"> </canvas>
      </div>
      <div>
        <div class="flex justify-center" id="controls">
          <button class="btn-new-pattern h-18 w-48" id="showButton" v-on:click="randomize()"><span
              class="mr-3">🎲</span>New
            Pattern</button>
        </div>
        <div class="flex flex-row justify-center pt-4">
          <div class="px-4">
            <div class="py-1">
              <input @change="randomize()" class="mx-2" type="radio" id="one" value="1" v-model="measures" />
              <label for="one">1 measure</label>
            </div>
            <div class="py-1">
              <input @change="randomize()" class="mx-2" type="radio" id="two" value="2" v-model="measures" />
              <label for="two">2 measures</label>
            </div>
          </div>
          <div class="px-4">
            <div class="py-1">
              <input @change="randomize()" class="mx-2" type="radio" id="eight" value="8" v-model="divisions" />
              <label for="eight">8th notes</label>
            </div>
            <div class="py-1">
              <input @change="randomize()" class="mx-2" type="radio" id="sixteen" value="16" v-model="divisions" />
              <label for="sixteen">16th notes</label>
            </div>
          </div>

        </div>
        <div id="tests">
        </div>
      </div>
      <footer>
        <a class="underline text-blue-500" href="https://github.com/tgerla/rhythm-trainer">GitHub</a>
      </footer>
    </div>
  </main>

</template>
