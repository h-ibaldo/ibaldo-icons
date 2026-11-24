import type { DefineComponent } from 'vue';

export interface TerminalSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TerminalSquare: DefineComponent<TerminalSquareProps>;

export default TerminalSquare;
export { TerminalSquare };
