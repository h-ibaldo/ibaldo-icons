import { SvelteComponent } from 'svelte';

export interface PointerShineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerShine extends SvelteComponent<PointerShineProps> {}
