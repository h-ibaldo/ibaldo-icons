import { SvelteComponent } from 'svelte';

export interface WindowShieldBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowShieldBare extends SvelteComponent<WindowShieldBareProps> {}
