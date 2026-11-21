import { SvelteComponent } from 'svelte';

export interface RocketDetailedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RocketDetailed extends SvelteComponent<RocketDetailedProps> {}
