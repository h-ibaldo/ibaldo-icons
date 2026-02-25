import { SvelteComponent } from 'svelte';

export interface Cloud1CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Check extends SvelteComponent<Cloud1CheckProps> {}
