import { SvelteComponent } from 'svelte';

export interface ChevronUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpRight extends SvelteComponent<ChevronUpRightProps> {}
