import { SvelteComponent } from 'svelte';

export interface WindowKeyDotBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowKeyDotBare extends SvelteComponent<WindowKeyDotBareProps> {}
