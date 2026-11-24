import { SvelteComponent } from 'svelte';

export interface LayoutBlocksProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutBlocks extends SvelteComponent<LayoutBlocksProps> {}
