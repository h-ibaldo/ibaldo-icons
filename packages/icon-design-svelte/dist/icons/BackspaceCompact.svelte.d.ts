import { SvelteComponent } from 'svelte';

export interface BackspaceCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BackspaceCompact extends SvelteComponent<BackspaceCompactProps> {}
