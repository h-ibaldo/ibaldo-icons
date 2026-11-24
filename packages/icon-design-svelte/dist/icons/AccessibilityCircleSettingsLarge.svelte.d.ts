import { SvelteComponent } from 'svelte';

export interface AccessibilityCircleSettingsLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityCircleSettingsLarge extends SvelteComponent<AccessibilityCircleSettingsLargeProps> {}
