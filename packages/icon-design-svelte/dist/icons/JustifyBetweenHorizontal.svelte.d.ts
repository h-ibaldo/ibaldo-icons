import { SvelteComponent } from 'svelte';

export interface JustifyBetweenHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class JustifyBetweenHorizontal extends SvelteComponent<JustifyBetweenHorizontalProps> {}
