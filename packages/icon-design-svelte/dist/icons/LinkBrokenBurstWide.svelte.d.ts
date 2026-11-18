import { SvelteComponent } from 'svelte';

export interface LinkBrokenBurstWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenBurstWide extends SvelteComponent<LinkBrokenBurstWideProps> {}
