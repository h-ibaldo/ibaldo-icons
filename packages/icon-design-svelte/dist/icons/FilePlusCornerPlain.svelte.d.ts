import { SvelteComponent } from 'svelte';

export interface FilePlusCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusCornerPlain extends SvelteComponent<FilePlusCornerPlainProps> {}
