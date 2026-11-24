import { SvelteComponent } from 'svelte';

export interface CircleHashtagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleHashtag extends SvelteComponent<CircleHashtagProps> {}
