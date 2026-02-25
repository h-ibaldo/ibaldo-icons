import { SvelteComponent } from 'svelte';

export interface TouchScreenMoveUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenMoveUp extends SvelteComponent<TouchScreenMoveUpProps> {}
