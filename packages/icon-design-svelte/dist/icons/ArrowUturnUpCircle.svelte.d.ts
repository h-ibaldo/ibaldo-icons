import { SvelteComponent } from 'svelte';

export interface ArrowUturnUpCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnUpCircle extends SvelteComponent<ArrowUturnUpCircleProps> {}
