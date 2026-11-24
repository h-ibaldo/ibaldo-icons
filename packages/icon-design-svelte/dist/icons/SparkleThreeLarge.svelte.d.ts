import { SvelteComponent } from 'svelte';

export interface SparkleThreeLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SparkleThreeLarge extends SvelteComponent<SparkleThreeLargeProps> {}
