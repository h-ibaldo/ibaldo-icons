import { SvelteComponent } from 'svelte';

export interface HeartWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartWide extends SvelteComponent<HeartWideProps> {}
