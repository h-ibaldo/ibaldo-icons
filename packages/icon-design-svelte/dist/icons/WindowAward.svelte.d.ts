import { SvelteComponent } from 'svelte';

export interface WindowAwardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowAward extends SvelteComponent<WindowAwardProps> {}
