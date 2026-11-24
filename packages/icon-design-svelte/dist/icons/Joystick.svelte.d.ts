import { SvelteComponent } from 'svelte';

export interface JoystickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Joystick extends SvelteComponent<JoystickProps> {}
