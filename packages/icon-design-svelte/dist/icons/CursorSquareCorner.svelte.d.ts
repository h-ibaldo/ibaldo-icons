import { SvelteComponent } from 'svelte';

export interface CursorSquareCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorSquareCorner extends SvelteComponent<CursorSquareCornerProps> {}
