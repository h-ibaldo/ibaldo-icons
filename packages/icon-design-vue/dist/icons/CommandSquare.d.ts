import type { DefineComponent } from 'vue';

export interface CommandSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CommandSquare: DefineComponent<CommandSquareProps>;

export default CommandSquare;
export { CommandSquare };
