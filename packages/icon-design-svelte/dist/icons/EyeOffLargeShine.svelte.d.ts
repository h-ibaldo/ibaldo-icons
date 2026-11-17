import { SvelteComponent } from 'svelte';

export interface EyeOffLargeShineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeOffLargeShine extends SvelteComponent<EyeOffLargeShineProps> {}
