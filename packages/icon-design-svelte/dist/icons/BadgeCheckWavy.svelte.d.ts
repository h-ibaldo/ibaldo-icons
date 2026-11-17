import { SvelteComponent } from 'svelte';

export interface BadgeCheckWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheckWavy extends SvelteComponent<BadgeCheckWavyProps> {}
