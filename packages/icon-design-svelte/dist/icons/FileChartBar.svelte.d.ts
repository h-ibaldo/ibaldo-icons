import { SvelteComponent } from 'svelte';

export interface FileChartBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileChartBar extends SvelteComponent<FileChartBarProps> {}
