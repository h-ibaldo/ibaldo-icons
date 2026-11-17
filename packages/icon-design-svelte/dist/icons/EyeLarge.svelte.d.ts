import { SvelteComponent } from 'svelte';

export interface EyeLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeLarge extends SvelteComponent<EyeLargeProps> {}
