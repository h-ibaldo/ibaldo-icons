import { SvelteComponent } from 'svelte';

export interface AccessibilityPersonNUI2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AccessibilityPersonNUI2 extends SvelteComponent<AccessibilityPersonNUI2Props> {}
