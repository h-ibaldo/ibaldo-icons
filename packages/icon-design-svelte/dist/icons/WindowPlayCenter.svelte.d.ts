import { SvelteComponent } from 'svelte';

export interface WindowPlayCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlayCenter extends SvelteComponent<WindowPlayCenterProps> {}
