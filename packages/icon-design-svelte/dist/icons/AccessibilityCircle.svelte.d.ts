import { SvelteComponent } from 'svelte';

export interface AccessibilityCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityCircle extends SvelteComponent<AccessibilityCircleProps> {}
