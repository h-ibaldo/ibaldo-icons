import { SvelteComponent } from 'svelte';

export interface TouchTapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchTap extends SvelteComponent<TouchTapProps> {}
