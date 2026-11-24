import type { DefineComponent } from 'vue';

export interface CommandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Command: DefineComponent<CommandProps>;

export default Command;
export { Command };
