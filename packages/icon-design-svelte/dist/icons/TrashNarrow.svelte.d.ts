import { SvelteComponent } from 'svelte';

export interface TrashNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashNarrow extends SvelteComponent<TrashNarrowProps> {}
