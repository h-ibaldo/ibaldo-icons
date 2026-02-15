import { SvelteComponent } from 'svelte';

export interface DragAndDropMoveInOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragAndDropMoveInOut extends SvelteComponent<DragAndDropMoveInOutProps> {}
