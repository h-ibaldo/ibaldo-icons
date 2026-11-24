import { SvelteComponent } from 'svelte';

export interface LinkBrokenBurstSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenBurstSlanted extends SvelteComponent<LinkBrokenBurstSlantedProps> {}
