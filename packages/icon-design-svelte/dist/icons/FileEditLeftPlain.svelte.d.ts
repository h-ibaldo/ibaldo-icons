import { SvelteComponent } from 'svelte';

export interface FileEditLeftPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEditLeftPlain extends SvelteComponent<FileEditLeftPlainProps> {}
