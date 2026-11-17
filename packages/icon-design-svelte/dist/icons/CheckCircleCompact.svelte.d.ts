import { SvelteComponent } from 'svelte';

export interface CheckCircleCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleCompact extends SvelteComponent<CheckCircleCompactProps> {}
