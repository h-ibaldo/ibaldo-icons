import { SvelteComponent } from 'svelte';

export interface Cloud1SadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Sad extends SvelteComponent<Cloud1SadProps> {}
