import { SvelteComponent } from 'svelte';

export interface WindowWrenchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowWrench extends SvelteComponent<WindowWrenchProps> {}
