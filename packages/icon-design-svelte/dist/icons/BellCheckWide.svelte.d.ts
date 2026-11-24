import { SvelteComponent } from 'svelte';

export interface BellCheckWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckWide extends SvelteComponent<BellCheckWideProps> {}
