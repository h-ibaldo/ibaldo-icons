import { SvelteComponent } from 'svelte';

export interface DiagramVertical2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramVertical2 extends SvelteComponent<DiagramVertical2Props> {}
