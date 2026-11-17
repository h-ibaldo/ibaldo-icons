import { SvelteComponent } from 'svelte';

export interface BellXWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXWide extends SvelteComponent<BellXWideProps> {}
