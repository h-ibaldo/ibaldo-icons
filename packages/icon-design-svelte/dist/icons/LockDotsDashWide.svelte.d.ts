import { SvelteComponent } from 'svelte';

export interface LockDotsDashWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockDotsDashWide extends SvelteComponent<LockDotsDashWideProps> {}
