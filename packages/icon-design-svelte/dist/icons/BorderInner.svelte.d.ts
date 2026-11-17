import { SvelteComponent } from 'svelte';

export interface BorderInnerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BorderInner extends SvelteComponent<BorderInnerProps> {}
