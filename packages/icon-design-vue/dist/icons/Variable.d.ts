import type { DefineComponent } from 'vue';

export interface VariableProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Variable: DefineComponent<VariableProps>;

export default Variable;
export { Variable };
