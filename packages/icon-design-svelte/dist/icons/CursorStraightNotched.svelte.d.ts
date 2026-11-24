import { SvelteComponent } from 'svelte';

export interface CursorStraightNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorStraightNotched extends SvelteComponent<CursorStraightNotchedProps> {}
