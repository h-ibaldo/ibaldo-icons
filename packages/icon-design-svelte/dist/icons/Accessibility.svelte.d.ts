import { SvelteComponent } from 'svelte';

export interface AccessibilityProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Accessibility extends SvelteComponent<AccessibilityProps> {}
