import { SvelteComponent } from 'svelte';

export interface EyeSquareArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeSquareArc extends SvelteComponent<EyeSquareArcProps> {}
