import { SvelteComponent } from 'svelte';

export interface LockWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockWide extends SvelteComponent<LockWideProps> {}
