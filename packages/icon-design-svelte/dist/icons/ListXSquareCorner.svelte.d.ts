import { SvelteComponent } from 'svelte';

export interface ListXSquareCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListXSquareCorner extends SvelteComponent<ListXSquareCornerProps> {}
