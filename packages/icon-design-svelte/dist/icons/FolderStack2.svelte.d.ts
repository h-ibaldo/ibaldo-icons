import { SvelteComponent } from 'svelte';

export interface FolderStack2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderStack2 extends SvelteComponent<FolderStack2Props> {}
