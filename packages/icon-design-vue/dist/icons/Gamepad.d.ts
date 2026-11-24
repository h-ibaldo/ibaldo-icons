import type { DefineComponent } from 'vue';

export interface GamepadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Gamepad: DefineComponent<GamepadProps>;

export default Gamepad;
export { Gamepad };
