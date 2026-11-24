import { SvelteComponent } from 'svelte';

export interface SparklePointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SparklePointed extends SvelteComponent<SparklePointedProps> {}
