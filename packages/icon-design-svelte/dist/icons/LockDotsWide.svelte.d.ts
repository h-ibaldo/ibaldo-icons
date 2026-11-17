import { SvelteComponent } from 'svelte';

export interface LockDotsWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockDotsWide extends SvelteComponent<LockDotsWideProps> {}
