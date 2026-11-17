import { SvelteComponent } from 'svelte';

export interface WindowShieldCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowShieldCenter extends SvelteComponent<WindowShieldCenterProps> {}
