import { SvelteComponent } from 'svelte';

export interface CursorUpRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorUpRightCircle extends SvelteComponent<CursorUpRightCircleProps> {}
