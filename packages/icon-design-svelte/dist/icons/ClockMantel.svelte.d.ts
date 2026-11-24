import { SvelteComponent } from 'svelte';

export interface ClockMantelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockMantel extends SvelteComponent<ClockMantelProps> {}
