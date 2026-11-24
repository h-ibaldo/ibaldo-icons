import { SvelteComponent } from 'svelte';

export interface AccessibilityGearWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityGearWavy extends SvelteComponent<AccessibilityGearWavyProps> {}
