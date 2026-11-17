import { SvelteComponent } from 'svelte';

export interface NewspaperTornCurlHeadlineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperTornCurlHeadline extends SvelteComponent<NewspaperTornCurlHeadlineProps> {}
