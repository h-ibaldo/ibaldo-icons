import { SvelteComponent } from 'svelte';

export interface TabFolderOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabFolderOpen extends SvelteComponent<TabFolderOpenProps> {}
