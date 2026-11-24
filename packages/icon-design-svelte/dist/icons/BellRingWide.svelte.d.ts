import { SvelteComponent } from 'svelte';

export interface BellRingWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingWide extends SvelteComponent<BellRingWideProps> {}
