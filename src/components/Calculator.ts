import { defineComponent, reactive } from "vue";
import { evaluate } from "mathjs";

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      displayValue: "0",
      result: 0,
    });

    const handleButtonClick = (value: string) => {
      if(state.displayValue === "0"){
        handleClear();
      }
    
      state.displayValue += value;
    };

    const handleClear = () => {
      state.displayValue = "";
      state.result = 0;
    };

    const handleEqual = () => {
      try {
        state.result = evaluate(state.displayValue);
        state.displayValue = state.result.toString();
      } catch {
        state.displayValue = "0";
      }
    };

    return { state, handleButtonClick, handleClear, handleEqual };
  },
});
