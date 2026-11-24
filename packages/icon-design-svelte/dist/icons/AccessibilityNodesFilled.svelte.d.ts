import { SvelteComponent } from 'svelte';

export interface AccessibilityNodesFilledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityNodesFilled extends SvelteComponent<AccessibilityNodesFilledProps> {}
