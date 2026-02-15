import { SvelteComponent } from 'svelte';

export interface TrashDeleteX2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashDeleteX2 extends SvelteComponent<TrashDeleteX2Props> {}
