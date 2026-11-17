import { SvelteComponent } from 'svelte';

export interface WindowModalBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowModalBare extends SvelteComponent<WindowModalBareProps> {}
