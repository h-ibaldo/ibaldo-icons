import { SvelteComponent } from 'svelte';

export interface RewindCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RewindCircle extends SvelteComponent<RewindCircleProps> {}
