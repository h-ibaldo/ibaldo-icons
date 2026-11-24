import { SvelteComponent } from 'svelte';

export interface LinkCheckCircleNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckCircleNotched extends SvelteComponent<LinkCheckCircleNotchedProps> {}
