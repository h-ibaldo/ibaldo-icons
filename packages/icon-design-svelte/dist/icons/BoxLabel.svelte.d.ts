import { SvelteComponent } from 'svelte';

export interface BoxLabelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxLabel extends SvelteComponent<BoxLabelProps> {}
