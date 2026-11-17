import { SvelteComponent } from 'svelte';

export interface XSquareCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XSquareCompact extends SvelteComponent<XSquareCompactProps> {}
