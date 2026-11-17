import { SvelteComponent } from 'svelte';

export interface BoxTapeTornProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxTapeTorn extends SvelteComponent<BoxTapeTornProps> {}
