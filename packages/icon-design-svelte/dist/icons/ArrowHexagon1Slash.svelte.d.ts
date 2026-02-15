import { SvelteComponent } from 'svelte';

export interface ArrowHexagon1SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowHexagon1Slash extends SvelteComponent<ArrowHexagon1SlashProps> {}
