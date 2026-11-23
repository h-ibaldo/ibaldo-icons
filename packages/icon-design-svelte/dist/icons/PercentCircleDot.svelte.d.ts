import { SvelteComponent } from 'svelte';

export interface PercentCircleDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PercentCircleDot extends SvelteComponent<PercentCircleDotProps> {}
