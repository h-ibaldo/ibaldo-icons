import { SvelteComponent } from 'svelte';

export interface FileUserPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileUserPlain extends SvelteComponent<FileUserPlainProps> {}
