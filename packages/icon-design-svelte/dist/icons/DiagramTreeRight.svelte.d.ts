import { SvelteComponent } from 'svelte';

export interface DiagramTreeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramTreeRight extends SvelteComponent<DiagramTreeRightProps> {}
