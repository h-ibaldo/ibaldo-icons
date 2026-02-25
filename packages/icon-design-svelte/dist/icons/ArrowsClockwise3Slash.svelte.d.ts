import { SvelteComponent } from 'svelte';

export interface ArrowsClockwise3SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsClockwise3Slash extends SvelteComponent<ArrowsClockwise3SlashProps> {}
