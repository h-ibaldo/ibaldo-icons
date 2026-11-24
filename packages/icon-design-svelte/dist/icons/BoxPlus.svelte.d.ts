import { SvelteComponent } from 'svelte';

export interface BoxPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxPlus extends SvelteComponent<BoxPlusProps> {}
