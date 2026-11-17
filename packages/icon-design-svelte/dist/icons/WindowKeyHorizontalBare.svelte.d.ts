import { SvelteComponent } from 'svelte';

export interface WindowKeyHorizontalBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowKeyHorizontalBare extends SvelteComponent<WindowKeyHorizontalBareProps> {}
