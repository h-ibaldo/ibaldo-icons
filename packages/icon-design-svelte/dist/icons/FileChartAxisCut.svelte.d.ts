import { SvelteComponent } from 'svelte';

export interface FileChartAxisCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileChartAxisCut extends SvelteComponent<FileChartAxisCutProps> {}
