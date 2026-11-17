import { SvelteComponent } from 'svelte';

export interface TouchMoveLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchMoveLeft extends SvelteComponent<TouchMoveLeftProps> {}
