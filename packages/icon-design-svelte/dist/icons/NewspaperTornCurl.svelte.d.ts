import { SvelteComponent } from 'svelte';

export interface NewspaperTornCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperTornCurl extends SvelteComponent<NewspaperTornCurlProps> {}
