import type { DefineComponent } from 'vue';

export interface JoystickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Joystick: DefineComponent<JoystickProps>;

export default Joystick;
export { Joystick };
