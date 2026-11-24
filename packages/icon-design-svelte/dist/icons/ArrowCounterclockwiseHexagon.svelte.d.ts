import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseHexagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseHexagon extends SvelteComponent<ArrowCounterclockwiseHexagonProps> {}
