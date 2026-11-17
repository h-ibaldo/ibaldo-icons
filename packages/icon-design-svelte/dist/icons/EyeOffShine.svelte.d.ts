import { SvelteComponent } from 'svelte';

export interface EyeOffShineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeOffShine extends SvelteComponent<EyeOffShineProps> {}
