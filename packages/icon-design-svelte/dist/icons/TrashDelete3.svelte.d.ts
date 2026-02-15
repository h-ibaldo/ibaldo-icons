import { SvelteComponent } from 'svelte';

export interface TrashDelete3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashDelete3 extends SvelteComponent<TrashDelete3Props> {}
