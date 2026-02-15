import { SvelteComponent } from 'svelte';

export interface Cloud1CheckedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Checked extends SvelteComponent<Cloud1CheckedProps> {}
