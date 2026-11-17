import { SvelteComponent } from 'svelte';

export interface CirclesStateArrowBothWaysProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CirclesStateArrowBothWays extends SvelteComponent<CirclesStateArrowBothWaysProps> {}
