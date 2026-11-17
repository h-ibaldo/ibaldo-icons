import { SvelteComponent } from 'svelte';

export interface AccessibilityCircleSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityCircleSettings extends SvelteComponent<AccessibilityCircleSettingsProps> {}
