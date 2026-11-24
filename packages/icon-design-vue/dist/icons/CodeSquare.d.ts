import type { DefineComponent } from 'vue';

export interface CodeSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeSquare: DefineComponent<CodeSquareProps>;

export default CodeSquare;
export { CodeSquare };
