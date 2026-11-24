import { SvelteComponent } from 'svelte';

export interface ArrowDownTrayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownTray extends SvelteComponent<ArrowDownTrayProps> {}
