import { SvelteComponent } from 'svelte';

export interface BoxOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxOpen extends SvelteComponent<BoxOpenProps> {}
