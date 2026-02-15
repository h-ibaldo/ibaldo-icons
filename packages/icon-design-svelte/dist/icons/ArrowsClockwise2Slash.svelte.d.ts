import { SvelteComponent } from 'svelte';

export interface ArrowsClockwise2SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsClockwise2Slash extends SvelteComponent<ArrowsClockwise2SlashProps> {}
