import { SvelteComponent } from 'svelte';

export interface EyeShineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeShine extends SvelteComponent<EyeShineProps> {}
