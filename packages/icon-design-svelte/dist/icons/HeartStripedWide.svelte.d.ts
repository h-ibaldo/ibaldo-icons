import { SvelteComponent } from 'svelte';

export interface HeartStripedWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartStripedWide extends SvelteComponent<HeartStripedWideProps> {}
