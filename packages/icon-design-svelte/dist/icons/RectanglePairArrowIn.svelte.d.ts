import { SvelteComponent } from 'svelte';

export interface RectanglePairArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RectanglePairArrowIn extends SvelteComponent<RectanglePairArrowInProps> {}
