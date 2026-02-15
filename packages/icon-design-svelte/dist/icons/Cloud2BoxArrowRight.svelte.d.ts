import { SvelteComponent } from 'svelte';

export interface Cloud2BoxArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2BoxArrowRight extends SvelteComponent<Cloud2BoxArrowRightProps> {}
