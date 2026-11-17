import { SvelteComponent } from 'svelte';

export interface WindowEyedropperProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowEyedropper extends SvelteComponent<WindowEyedropperProps> {}
