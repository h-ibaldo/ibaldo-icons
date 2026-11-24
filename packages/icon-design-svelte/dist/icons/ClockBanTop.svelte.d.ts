import { SvelteComponent } from 'svelte';

export interface ClockBanTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockBanTop extends SvelteComponent<ClockBanTopProps> {}
