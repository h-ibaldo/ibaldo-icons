import { SvelteComponent } from 'svelte';

export interface AccessibilityPersonSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityPersonSquare extends SvelteComponent<AccessibilityPersonSquareProps> {}
