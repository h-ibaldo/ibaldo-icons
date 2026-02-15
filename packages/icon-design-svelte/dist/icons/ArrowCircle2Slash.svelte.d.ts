import { SvelteComponent } from 'svelte';

export interface ArrowCircle2SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCircle2Slash extends SvelteComponent<ArrowCircle2SlashProps> {}
