import { SvelteComponent } from 'svelte';

export interface EyeLargeShineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeLargeShine extends SvelteComponent<EyeLargeShineProps> {}
