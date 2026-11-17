import { SvelteComponent } from 'svelte';

export interface CheckSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSmall extends SvelteComponent<CheckSmallProps> {}
