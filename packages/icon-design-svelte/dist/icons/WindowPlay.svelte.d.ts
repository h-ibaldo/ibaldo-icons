import { SvelteComponent } from 'svelte';

export interface WindowPlayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlay extends SvelteComponent<WindowPlayProps> {}
