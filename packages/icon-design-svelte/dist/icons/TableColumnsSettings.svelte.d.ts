import { SvelteComponent } from 'svelte';

export interface TableColumnsSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TableColumnsSettings extends SvelteComponent<TableColumnsSettingsProps> {}
