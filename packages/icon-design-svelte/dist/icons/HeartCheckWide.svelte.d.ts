import { SvelteComponent } from 'svelte';

export interface HeartCheckWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartCheckWide extends SvelteComponent<HeartCheckWideProps> {}
