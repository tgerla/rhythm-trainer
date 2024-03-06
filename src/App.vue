<script setup>
import { ref, onMounted } from 'vue'
import { renderScore } from './score-renderer.js'

const measures = ref(1)
const notes = ref(8)

function randomize() {
  const imageContainer1 = document.getElementById('imageContainer1');
  const imageContainer2 = document.getElementById('imageContainer2');

  imageContainer1.innerHTML = '';
  imageContainer2.innerHTML = '';
  imageContainer1.style.display = 'block';
  imageContainer2.style.display = 'none';

  renderScore("imageContainer1");

  if (measures.value == 2) {
    renderScore("imageContainer2");
    imageContainer2.style.display = 'block';
  }
}

onMounted(() => {
  randomize();
})
</script>

<template>
  <main class="flex justify-center">
    <div class="flex flex-col justify-center">
      <h1 class="pt-4 flex justify-center">Rhythm Trainer</h1>
      <div class="flex flex-row flex-wrap justify-center">
        <canvas id="imageContainer1"> </canvas>
        <canvas id="imageContainer2"> </canvas>
      </div>
      <div>
        <div class="flex justify-center" id="controls">
          <button class="btn-yellow h-18 w-28" id="showButton" v-on:click="randomize()">Refresh</button>
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
              <input class="mx-2" type="radio" id="eight" value="8" v-model="notes" />
              <label for="eight">8th notes</label>
            </div>
            <div class="py-1">
              <input class="mx-2" type="radio" id="sixteen" value="16" v-model="notes" />
              <label for="sixteen">16th notes</label>
            </div>
          </div>

        </div>
      </div>
      <footer class="border-t-2 text-sm text-gray-400">
        Copyright (C) 2024 Timothy Gerla

        (<a class="underline text-blue-500" href="https://github.com/tgerla/rhythm-trainer">View the source code</a>)
      </footer>
    </div>
  </main>

</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

@media (max-width: 600px) {
  #imageContainer {
    flex-direction: column;
  }
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
}

Button {
  padding: 10px;
  margin: 10px;
}
</style>
