import { SvelteComponent } from 'svelte';

export interface CursorStraight2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorStraight2 extends SvelteComponent<CursorStraight2Props> {}
