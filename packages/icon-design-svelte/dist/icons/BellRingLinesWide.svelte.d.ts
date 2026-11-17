import { SvelteComponent } from 'svelte';

export interface BellRingLinesWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingLinesWide extends SvelteComponent<BellRingLinesWideProps> {}
