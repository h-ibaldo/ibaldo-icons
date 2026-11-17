import { SvelteComponent } from 'svelte';

export interface TabSaveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabSave extends SvelteComponent<TabSaveProps> {}
