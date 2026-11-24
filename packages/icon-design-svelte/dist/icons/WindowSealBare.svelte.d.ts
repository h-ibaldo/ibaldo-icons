import { SvelteComponent } from 'svelte';

export interface WindowSealBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSealBare extends SvelteComponent<WindowSealBareProps> {}
