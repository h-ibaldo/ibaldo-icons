import { SvelteComponent } from 'svelte';

export interface WindowEyedropperBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowEyedropperBare extends SvelteComponent<WindowEyedropperBareProps> {}
