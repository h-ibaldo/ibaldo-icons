import { SvelteComponent } from 'svelte';

export interface DiagramVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramVertical extends SvelteComponent<DiagramVerticalProps> {}
