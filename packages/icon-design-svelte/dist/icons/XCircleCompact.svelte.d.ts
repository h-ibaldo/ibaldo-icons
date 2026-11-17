import { SvelteComponent } from 'svelte';

export interface XCircleCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XCircleCompact extends SvelteComponent<XCircleCompactProps> {}
