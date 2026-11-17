import { SvelteComponent } from 'svelte';

export interface BellOffWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOffWide extends SvelteComponent<BellOffWideProps> {}
