import { SvelteComponent } from 'svelte';

export interface ClockUnlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockUnlock extends SvelteComponent<ClockUnlockProps> {}
