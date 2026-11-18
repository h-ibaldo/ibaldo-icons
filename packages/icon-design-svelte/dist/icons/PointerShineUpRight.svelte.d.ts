import { SvelteComponent } from 'svelte';

export interface PointerShineUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerShineUpRight extends SvelteComponent<PointerShineUpRightProps> {}
