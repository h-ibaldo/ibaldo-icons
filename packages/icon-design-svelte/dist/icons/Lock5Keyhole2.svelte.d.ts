import { SvelteComponent } from 'svelte';

export interface Lock5Keyhole2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5Keyhole2 extends SvelteComponent<Lock5Keyhole2Props> {}
