import { SvelteComponent } from 'svelte';

export interface MoonSnoozeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonSnooze extends SvelteComponent<MoonSnoozeProps> {}
