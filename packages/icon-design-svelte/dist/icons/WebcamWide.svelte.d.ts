import { SvelteComponent } from 'svelte';

export interface WebcamWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebcamWide extends SvelteComponent<WebcamWideProps> {}
