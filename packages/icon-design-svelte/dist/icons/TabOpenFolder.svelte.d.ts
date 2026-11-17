import { SvelteComponent } from 'svelte';

export interface TabOpenFolderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabOpenFolder extends SvelteComponent<TabOpenFolderProps> {}
