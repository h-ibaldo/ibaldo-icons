import { SvelteComponent } from 'svelte';

export interface ClockCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockClose extends SvelteComponent<ClockCloseProps> {}
