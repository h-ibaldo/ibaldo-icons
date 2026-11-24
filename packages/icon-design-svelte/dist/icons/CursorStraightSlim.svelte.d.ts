import { SvelteComponent } from 'svelte';

export interface CursorStraightSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorStraightSlim extends SvelteComponent<CursorStraightSlimProps> {}
