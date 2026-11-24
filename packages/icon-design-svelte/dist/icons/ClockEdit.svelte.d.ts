import { SvelteComponent } from 'svelte';

export interface ClockEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockEdit extends SvelteComponent<ClockEditProps> {}
