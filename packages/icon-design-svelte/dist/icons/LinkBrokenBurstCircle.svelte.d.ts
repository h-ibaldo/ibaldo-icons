import { SvelteComponent } from 'svelte';

export interface LinkBrokenBurstCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenBurstCircle extends SvelteComponent<LinkBrokenBurstCircleProps> {}
