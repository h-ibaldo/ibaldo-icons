import { SvelteComponent } from 'svelte';

export interface ChevronRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronRight extends SvelteComponent<ChevronRightProps> {}
