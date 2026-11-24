import { SvelteComponent } from 'svelte';

export interface GaugeFlatCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeFlatCircle extends SvelteComponent<GaugeFlatCircleProps> {}
