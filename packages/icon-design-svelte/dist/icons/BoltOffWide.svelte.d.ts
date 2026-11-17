import { SvelteComponent } from 'svelte';

export interface BoltOffWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoltOffWide extends SvelteComponent<BoltOffWideProps> {}
