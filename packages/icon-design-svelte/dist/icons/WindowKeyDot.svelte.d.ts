import { SvelteComponent } from 'svelte';

export interface WindowKeyDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowKeyDot extends SvelteComponent<WindowKeyDotProps> {}
