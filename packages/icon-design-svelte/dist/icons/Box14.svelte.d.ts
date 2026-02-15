import { SvelteComponent } from 'svelte';

export interface Box14Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box14 extends SvelteComponent<Box14Props> {}
