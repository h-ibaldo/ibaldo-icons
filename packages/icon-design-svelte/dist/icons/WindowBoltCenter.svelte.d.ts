import { SvelteComponent } from 'svelte';

export interface WindowBoltCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowBoltCenter extends SvelteComponent<WindowBoltCenterProps> {}
