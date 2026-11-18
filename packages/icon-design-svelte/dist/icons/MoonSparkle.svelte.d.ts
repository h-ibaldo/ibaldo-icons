import { SvelteComponent } from 'svelte';

export interface MoonSparkleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonSparkle extends SvelteComponent<MoonSparkleProps> {}
