import { SvelteComponent } from 'svelte';

export interface AccessibilitySettingsPerson2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilitySettingsPerson2 extends SvelteComponent<AccessibilitySettingsPerson2Props> {}
