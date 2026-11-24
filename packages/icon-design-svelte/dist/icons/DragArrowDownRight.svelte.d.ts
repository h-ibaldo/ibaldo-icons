import { SvelteComponent } from 'svelte';

export interface DragArrowDownRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragArrowDownRight extends SvelteComponent<DragArrowDownRightProps> {}
