import { SvelteComponent } from 'svelte';

export interface CursorStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorStraight extends SvelteComponent<CursorStraightProps> {}
