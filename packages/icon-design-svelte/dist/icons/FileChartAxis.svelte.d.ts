import { SvelteComponent } from 'svelte';

export interface FileChartAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileChartAxis extends SvelteComponent<FileChartAxisProps> {}
