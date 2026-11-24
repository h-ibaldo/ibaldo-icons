import { SvelteComponent } from 'svelte';

export interface BackspaceCompactSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BackspaceCompactSmall extends SvelteComponent<BackspaceCompactSmallProps> {}
