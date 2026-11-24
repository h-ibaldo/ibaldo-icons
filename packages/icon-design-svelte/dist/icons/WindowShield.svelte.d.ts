import { SvelteComponent } from 'svelte';

export interface WindowShieldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowShield extends SvelteComponent<WindowShieldProps> {}
