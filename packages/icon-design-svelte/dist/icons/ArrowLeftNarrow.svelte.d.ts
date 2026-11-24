import { SvelteComponent } from 'svelte';

export interface ArrowLeftNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftNarrow extends SvelteComponent<ArrowLeftNarrowProps> {}
