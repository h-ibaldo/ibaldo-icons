import { SvelteComponent } from 'svelte';

export interface TouchMoveRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchMoveRight extends SvelteComponent<TouchMoveRightProps> {}
