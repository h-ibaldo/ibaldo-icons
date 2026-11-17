import { SvelteComponent } from 'svelte';

export interface AccessibilitySquareSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilitySquareSettings extends SvelteComponent<AccessibilitySquareSettingsProps> {}
