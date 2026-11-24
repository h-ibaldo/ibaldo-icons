import { SvelteComponent } from 'svelte';

export interface GamepadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Gamepad extends SvelteComponent<GamepadProps> {}
