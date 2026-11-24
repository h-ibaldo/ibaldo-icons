import { SvelteComponent } from 'svelte';

export interface CheckUnderlineCircleCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckUnderlineCircleCompact extends SvelteComponent<CheckUnderlineCircleCompactProps> {}
