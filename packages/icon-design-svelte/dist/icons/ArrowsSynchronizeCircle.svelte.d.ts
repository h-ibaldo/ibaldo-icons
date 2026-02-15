import { SvelteComponent } from 'svelte';

export interface ArrowsSynchronizeCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsSynchronizeCircle extends SvelteComponent<ArrowsSynchronizeCircleProps> {}
