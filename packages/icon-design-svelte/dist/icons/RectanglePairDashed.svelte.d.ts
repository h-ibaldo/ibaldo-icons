import { SvelteComponent } from 'svelte';

export interface RectanglePairDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RectanglePairDashed extends SvelteComponent<RectanglePairDashedProps> {}
