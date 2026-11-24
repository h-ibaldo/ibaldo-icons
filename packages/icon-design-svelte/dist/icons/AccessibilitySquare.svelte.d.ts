import { SvelteComponent } from 'svelte';

export interface AccessibilitySquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilitySquare extends SvelteComponent<AccessibilitySquareProps> {}
