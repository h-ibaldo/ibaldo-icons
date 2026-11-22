import { SvelteComponent } from 'svelte';

export interface JustifyRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class JustifyRight extends SvelteComponent<JustifyRightProps> {}
