import { SvelteComponent } from 'svelte';

export interface AccessibilityPentagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityPentagon extends SvelteComponent<AccessibilityPentagonProps> {}
