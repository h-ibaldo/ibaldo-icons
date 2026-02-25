import { SvelteComponent } from 'svelte';

export interface Cloud2ViewProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2View extends SvelteComponent<Cloud2ViewProps> {}
