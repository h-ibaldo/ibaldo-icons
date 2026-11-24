import { SvelteComponent } from 'svelte';

export interface BadgeCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheckCircle extends SvelteComponent<BadgeCheckCircleProps> {}
