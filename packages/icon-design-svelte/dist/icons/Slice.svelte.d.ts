import { SvelteComponent } from 'svelte';

export interface SliceProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Slice extends SvelteComponent<SliceProps> {}
