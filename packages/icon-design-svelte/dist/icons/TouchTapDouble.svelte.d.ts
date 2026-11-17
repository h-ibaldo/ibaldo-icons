import { SvelteComponent } from 'svelte';

export interface TouchTapDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchTapDouble extends SvelteComponent<TouchTapDoubleProps> {}
