import { SvelteComponent } from 'svelte';

export interface Lock5Keyhole1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5Keyhole1 extends SvelteComponent<Lock5Keyhole1Props> {}
