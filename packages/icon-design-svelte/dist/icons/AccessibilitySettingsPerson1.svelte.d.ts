import { SvelteComponent } from 'svelte';

export interface AccessibilitySettingsPerson1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilitySettingsPerson1 extends SvelteComponent<AccessibilitySettingsPerson1Props> {}
