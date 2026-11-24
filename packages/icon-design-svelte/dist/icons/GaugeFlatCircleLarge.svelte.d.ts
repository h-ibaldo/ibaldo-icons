import { SvelteComponent } from 'svelte';

export interface GaugeFlatCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeFlatCircleLarge extends SvelteComponent<GaugeFlatCircleLargeProps> {}
