import type { DefineComponent } from 'vue';

export interface CommandCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CommandCircle: DefineComponent<CommandCircleProps>;

export default CommandCircle;
export { CommandCircle };
