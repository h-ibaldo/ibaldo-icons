import { SvelteComponent } from 'svelte';

export interface DragArrowUpLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragArrowUpLeft extends SvelteComponent<DragArrowUpLeftProps> {}
