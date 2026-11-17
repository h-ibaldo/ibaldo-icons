import { SvelteComponent } from 'svelte';

export interface MinusCircleCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusCircleCompact extends SvelteComponent<MinusCircleCompactProps> {}
