import { SvelteComponent } from 'svelte';

export interface CursorCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorCircle extends SvelteComponent<CursorCircleProps> {}
