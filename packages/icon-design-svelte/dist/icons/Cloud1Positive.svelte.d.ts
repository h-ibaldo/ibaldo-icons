import { SvelteComponent } from 'svelte';

export interface Cloud1PositiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Positive extends SvelteComponent<Cloud1PositiveProps> {}
