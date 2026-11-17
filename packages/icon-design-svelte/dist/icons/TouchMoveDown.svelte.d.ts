import { SvelteComponent } from 'svelte';

export interface TouchMoveDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchMoveDown extends SvelteComponent<TouchMoveDownProps> {}
