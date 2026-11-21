import { SvelteComponent } from 'svelte';

export interface ApproximateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Approximate extends SvelteComponent<ApproximateProps> {}
