import { SvelteComponent } from 'svelte';

export interface Door3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door3 extends SvelteComponent<Door3Props> {}
