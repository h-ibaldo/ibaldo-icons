import { SvelteComponent } from 'svelte';

export interface ArrowUpTrayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpTray extends SvelteComponent<ArrowUpTrayProps> {}
