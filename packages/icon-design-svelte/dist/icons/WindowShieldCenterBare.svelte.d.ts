import { SvelteComponent } from 'svelte';

export interface WindowShieldCenterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowShieldCenterBare extends SvelteComponent<WindowShieldCenterBareProps> {}
