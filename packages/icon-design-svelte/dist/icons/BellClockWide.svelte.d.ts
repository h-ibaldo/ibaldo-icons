import { SvelteComponent } from 'svelte';

export interface BellClockWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellClockWide extends SvelteComponent<BellClockWideProps> {}
