import { SvelteComponent } from 'svelte';

export interface LinkCircleCheckWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleCheckWide extends SvelteComponent<LinkCircleCheckWideProps> {}
