import { SvelteComponent } from 'svelte';

export interface DragCursorCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragCursorCenter extends SvelteComponent<DragCursorCenterProps> {}
