import { SvelteComponent } from 'svelte';

export interface LinkRaysVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkRaysVertical extends SvelteComponent<LinkRaysVerticalProps> {}
