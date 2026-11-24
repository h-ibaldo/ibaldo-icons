import { SvelteComponent } from 'svelte';

export interface WindowWrenchBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowWrenchBare extends SvelteComponent<WindowWrenchBareProps> {}
