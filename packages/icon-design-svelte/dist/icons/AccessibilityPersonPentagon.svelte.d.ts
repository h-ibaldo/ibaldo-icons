import { SvelteComponent } from 'svelte';

export interface AccessibilityPersonPentagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityPersonPentagon extends SvelteComponent<AccessibilityPersonPentagonProps> {}
