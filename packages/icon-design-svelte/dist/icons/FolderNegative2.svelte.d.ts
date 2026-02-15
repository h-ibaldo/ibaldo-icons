import { SvelteComponent } from 'svelte';

export interface FolderNegative2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderNegative2 extends SvelteComponent<FolderNegative2Props> {}
