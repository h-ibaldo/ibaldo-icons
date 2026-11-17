import { SvelteComponent } from 'svelte';

export interface HandMoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandMove extends SvelteComponent<HandMoveProps> {}
