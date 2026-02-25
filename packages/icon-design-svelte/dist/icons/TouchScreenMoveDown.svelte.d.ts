import { SvelteComponent } from 'svelte';

export interface TouchScreenMoveDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenMoveDown extends SvelteComponent<TouchScreenMoveDownProps> {}
