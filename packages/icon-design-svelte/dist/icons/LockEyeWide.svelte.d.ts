import { SvelteComponent } from 'svelte';

export interface LockEyeWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockEyeWide extends SvelteComponent<LockEyeWideProps> {}
