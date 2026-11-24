import { SvelteComponent } from 'svelte';

export interface ClockLinkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockLink extends SvelteComponent<ClockLinkProps> {}
