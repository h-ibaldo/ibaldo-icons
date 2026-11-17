import { SvelteComponent } from 'svelte';

export interface LockXWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockXWide extends SvelteComponent<LockXWideProps> {}
