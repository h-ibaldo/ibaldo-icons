import { SvelteComponent } from 'svelte';

export interface TrashDelete1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashDelete1 extends SvelteComponent<TrashDelete1Props> {}
