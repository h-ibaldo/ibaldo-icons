import { SvelteComponent } from 'svelte';

export interface Door1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door1 extends SvelteComponent<Door1Props> {}
