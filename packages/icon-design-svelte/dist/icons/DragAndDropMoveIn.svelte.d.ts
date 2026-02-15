import { SvelteComponent } from 'svelte';

export interface DragAndDropMoveInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragAndDropMoveIn extends SvelteComponent<DragAndDropMoveInProps> {}
