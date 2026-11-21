import type { DefineComponent } from 'vue';

export interface CalculatorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Calculator: DefineComponent<CalculatorProps>;

export default Calculator;
export { Calculator };
