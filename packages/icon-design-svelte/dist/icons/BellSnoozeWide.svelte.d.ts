import { SvelteComponent } from 'svelte';

export interface BellSnoozeWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSnoozeWide extends SvelteComponent<BellSnoozeWideProps> {}
