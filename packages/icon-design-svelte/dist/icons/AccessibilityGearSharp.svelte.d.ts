import { SvelteComponent } from 'svelte';

export interface AccessibilityGearSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityGearSharp extends SvelteComponent<AccessibilityGearSharpProps> {}
