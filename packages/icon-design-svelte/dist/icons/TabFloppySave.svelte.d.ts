import { SvelteComponent } from 'svelte';

export interface TabFloppySaveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabFloppySave extends SvelteComponent<TabFloppySaveProps> {}
