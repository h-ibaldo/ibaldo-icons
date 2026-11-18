import { SvelteComponent } from 'svelte';

export interface FileLockPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLockPlain extends SvelteComponent<FileLockPlainProps> {}
