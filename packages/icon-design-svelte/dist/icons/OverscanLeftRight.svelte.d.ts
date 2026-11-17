import { SvelteComponent } from 'svelte';

export interface OverscanLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OverscanLeftRight extends SvelteComponent<OverscanLeftRightProps> {}
