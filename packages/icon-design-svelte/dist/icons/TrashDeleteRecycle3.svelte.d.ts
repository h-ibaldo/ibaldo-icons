import { SvelteComponent } from 'svelte';

export interface TrashDeleteRecycle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashDeleteRecycle3 extends SvelteComponent<TrashDeleteRecycle3Props> {}
