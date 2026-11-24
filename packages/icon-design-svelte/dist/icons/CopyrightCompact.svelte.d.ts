import { SvelteComponent } from 'svelte';

export interface CopyrightCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CopyrightCompact extends SvelteComponent<CopyrightCompactProps> {}
