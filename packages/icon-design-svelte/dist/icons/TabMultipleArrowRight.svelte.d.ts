import { SvelteComponent } from 'svelte';

export interface TabMultipleArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMultipleArrowRight extends SvelteComponent<TabMultipleArrowRightProps> {}
