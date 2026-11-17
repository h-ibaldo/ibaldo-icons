import { SvelteComponent } from 'svelte';

export interface AtCornersCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCornersCompact extends SvelteComponent<AtCornersCompactProps> {}
