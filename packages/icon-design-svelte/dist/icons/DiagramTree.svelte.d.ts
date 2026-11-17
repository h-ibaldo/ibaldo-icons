import { SvelteComponent } from 'svelte';

export interface DiagramTreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramTree extends SvelteComponent<DiagramTreeProps> {}
