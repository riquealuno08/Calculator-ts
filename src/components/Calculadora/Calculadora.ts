import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      displayValue: "",
      currentOperation: null,
      currentValue: 0,
      result: 0,
    });

    const handleButtonClick = (value: string) => {
      state.displayValue += value;
    };

    const handleClear = () => {
      state.displayValue = "";
      state.currentValue = 0;
      state.result = 0;
    };

    const handleEqual = () => {
      try {
        state.result = eval(state.displayValue);
        state.displayValue = state.result.toString();
      } catch {
        state.displayValue = "Error";
      }
    };

    return { state, handleButtonClick, handleClear, handleEqual };
  },
});
