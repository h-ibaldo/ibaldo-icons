import { SvelteComponent } from 'svelte';

export interface LockOpenWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenWide extends SvelteComponent<LockOpenWideProps> {}
