import { SvelteComponent } from 'svelte';

export interface ChalkboardMathProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChalkboardMath extends SvelteComponent<ChalkboardMathProps> {}
