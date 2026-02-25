import { SvelteComponent } from 'svelte';

export interface ArrowsHexagon2SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsHexagon2Slash extends SvelteComponent<ArrowsHexagon2SlashProps> {}
