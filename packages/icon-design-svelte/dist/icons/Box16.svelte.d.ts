import { SvelteComponent } from 'svelte';

export interface Box16Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box16 extends SvelteComponent<Box16Props> {}
