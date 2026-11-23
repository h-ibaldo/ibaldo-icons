import { SvelteComponent } from 'svelte';

export interface MagnetRightSparkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MagnetRightSpark extends SvelteComponent<MagnetRightSparkProps> {}
