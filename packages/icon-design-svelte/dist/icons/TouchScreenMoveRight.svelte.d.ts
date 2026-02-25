import { SvelteComponent } from 'svelte';

export interface TouchScreenMoveRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenMoveRight extends SvelteComponent<TouchScreenMoveRightProps> {}
