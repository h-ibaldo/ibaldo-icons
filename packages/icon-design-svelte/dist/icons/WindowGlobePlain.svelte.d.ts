import { SvelteComponent } from 'svelte';

export interface WindowGlobePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowGlobePlain extends SvelteComponent<WindowGlobePlainProps> {}
