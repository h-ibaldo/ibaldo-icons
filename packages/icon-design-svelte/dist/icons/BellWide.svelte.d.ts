import { SvelteComponent } from 'svelte';

export interface BellWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellWide extends SvelteComponent<BellWideProps> {}
