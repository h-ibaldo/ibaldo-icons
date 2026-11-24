import { SvelteComponent } from 'svelte';

export interface BellCheckCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckCircleWide extends SvelteComponent<BellCheckCircleWideProps> {}
