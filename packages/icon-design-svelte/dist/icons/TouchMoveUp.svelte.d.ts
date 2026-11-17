import { SvelteComponent } from 'svelte';

export interface TouchMoveUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchMoveUp extends SvelteComponent<TouchMoveUpProps> {}
