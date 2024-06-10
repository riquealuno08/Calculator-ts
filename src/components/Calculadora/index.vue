<template>
  <div
    class="calculadora min-h-screen flex items-center justify-center bg-gray-100"
  >
    <div class="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
      <input
        type="text"
        id="display"
        v-model="state.displayValue"
        class="w-full p-4 border border-gray-300 rounded-lg text-right text-2xl mb-4"
        readonly
      />

      <div class="grid grid-cols-4 gap-2">
        <button
          @click="handleClear"
          class="button-clear col-span-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition duration-200"
        >
          C
        </button>
        <button @click="handleButtonClick('/')" class="button-op">/</button>
        <button @click="handleButtonClick('*')" class="button-op">*</button>
        <button @click="handleButtonClick('-')" class="button-op">-</button>

        <button @click="handleButtonClick('7')" class="button-op">7</button>
        <button @click="handleButtonClick('8')" class="button-op">8</button>
        <button @click="handleButtonClick('9')" class="button-op">9</button>
        <button @click="handleButtonClick('+')" class="button-op">+</button>

        <button @click="handleButtonClick('4')" class="button-op">4</button>
        <button @click="handleButtonClick('5')" class="button-op">5</button>
        <button @click="handleButtonClick('6')" class="button-op">6</button>
        <button @click="handleButtonClick('(')" class="button-op">(</button>

        <button @click="handleButtonClick('1')" class="button-op">1</button>
        <button @click="handleButtonClick('2')" class="button-op">2</button>
        <button @click="handleButtonClick('3')" class="button-op">3</button>
        <button @click="handleButtonClick(')')" class="button-op">)</button>
        <button @click="handleButtonClick('0')" class="button-op col-span-3">
          0
        </button>
        <button
          @click="handleEqual"
          class="button-equal focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 bg-green-500 text-white p-4 rounded-lg hover:bg-green-600"
        >
          =
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Calculadora.ts"></script>

<style scoped>
.button-op {
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition duration-200;
}
.button-equal {
  @apply focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition duration-200;
}
</style>
