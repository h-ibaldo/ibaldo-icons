import { SvelteComponent } from 'svelte';

export interface WindowBoltCenterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowBoltCenterBare extends SvelteComponent<WindowBoltCenterBareProps> {}
