import { SvelteComponent } from 'svelte';

export interface PenToolVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PenToolVertical extends SvelteComponent<PenToolVerticalProps> {}
