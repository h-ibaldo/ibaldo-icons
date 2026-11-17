import { SvelteComponent } from 'svelte';

export interface ScreenShareArrowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenShareArrows extends SvelteComponent<ScreenShareArrowsProps> {}
