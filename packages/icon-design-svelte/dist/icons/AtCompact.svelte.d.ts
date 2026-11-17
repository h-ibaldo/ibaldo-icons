import { SvelteComponent } from 'svelte';

export interface AtCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCompact extends SvelteComponent<AtCompactProps> {}
