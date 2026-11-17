import { SvelteComponent } from 'svelte';

export interface WindowSealProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSeal extends SvelteComponent<WindowSealProps> {}
