import type { DefineComponent } from 'vue';

export interface CommandSquareShadowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CommandSquareShadow: DefineComponent<CommandSquareShadowProps>;

export default CommandSquareShadow;
export { CommandSquareShadow };
