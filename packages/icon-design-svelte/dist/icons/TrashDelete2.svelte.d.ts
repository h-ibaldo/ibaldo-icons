import { SvelteComponent } from 'svelte';

export interface TrashDelete2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashDelete2 extends SvelteComponent<TrashDelete2Props> {}
