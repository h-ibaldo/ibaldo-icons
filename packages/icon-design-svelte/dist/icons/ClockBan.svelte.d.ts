import { SvelteComponent } from 'svelte';

export interface ClockBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockBan extends SvelteComponent<ClockBanProps> {}
