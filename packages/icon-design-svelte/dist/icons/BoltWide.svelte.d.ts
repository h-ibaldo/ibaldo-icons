import { SvelteComponent } from 'svelte';

export interface BoltWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoltWide extends SvelteComponent<BoltWideProps> {}
