import type { DefineComponent } from 'vue';

export interface CommandSquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CommandSquareStack: DefineComponent<CommandSquareStackProps>;

export default CommandSquareStack;
export { CommandSquareStack };
