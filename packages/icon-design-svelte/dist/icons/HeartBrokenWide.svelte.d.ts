import { SvelteComponent } from 'svelte';

export interface HeartBrokenWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartBrokenWide extends SvelteComponent<HeartBrokenWideProps> {}
