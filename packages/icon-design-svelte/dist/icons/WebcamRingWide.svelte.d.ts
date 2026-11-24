import { SvelteComponent } from 'svelte';

export interface WebcamRingWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebcamRingWide extends SvelteComponent<WebcamRingWideProps> {}
