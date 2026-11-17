import { SvelteComponent } from 'svelte';

export interface DragDropMoveInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragDropMoveIn extends SvelteComponent<DragDropMoveInProps> {}
