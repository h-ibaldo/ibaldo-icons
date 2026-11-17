import { SvelteComponent } from 'svelte';

export interface AccessibilityGearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityGear extends SvelteComponent<AccessibilityGearProps> {}
