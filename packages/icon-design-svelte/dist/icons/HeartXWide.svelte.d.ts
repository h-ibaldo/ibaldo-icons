import { SvelteComponent } from 'svelte';

export interface HeartXWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartXWide extends SvelteComponent<HeartXWideProps> {}
