import { SvelteComponent } from 'svelte';

export interface LinkCircleArrowRightWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleArrowRightWide extends SvelteComponent<LinkCircleArrowRightWideProps> {}
