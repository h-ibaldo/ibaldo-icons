import { SvelteComponent } from 'svelte';

export interface CheckSquareCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquareCompact extends SvelteComponent<CheckSquareCompactProps> {}
