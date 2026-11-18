import { SvelteComponent } from 'svelte';

export interface ListXSquareCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListXSquareCenter extends SvelteComponent<ListXSquareCenterProps> {}
