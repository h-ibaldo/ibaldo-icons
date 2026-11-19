import type { DefineComponent } from 'vue';

export interface CodeMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeMinus: DefineComponent<CodeMinusProps>;

export default CodeMinus;
export { CodeMinus };
