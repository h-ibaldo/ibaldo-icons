import { SvelteComponent } from 'svelte';

export interface CirclesStateArrowOneWayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CirclesStateArrowOneWay extends SvelteComponent<CirclesStateArrowOneWayProps> {}
