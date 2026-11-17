import { SvelteComponent } from 'svelte';

export interface BellDotWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellDotWide extends SvelteComponent<BellDotWideProps> {}
