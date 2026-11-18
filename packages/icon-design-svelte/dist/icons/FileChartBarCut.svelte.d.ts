import { SvelteComponent } from 'svelte';

export interface FileChartBarCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileChartBarCut extends SvelteComponent<FileChartBarCutProps> {}
