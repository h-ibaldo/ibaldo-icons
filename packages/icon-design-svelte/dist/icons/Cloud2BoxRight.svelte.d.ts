import { SvelteComponent } from 'svelte';

export interface Cloud2BoxRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2BoxRight extends SvelteComponent<Cloud2BoxRightProps> {}
