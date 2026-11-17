import { SvelteComponent } from 'svelte';

export interface BadgeCheckNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheckNotched extends SvelteComponent<BadgeCheckNotchedProps> {}
