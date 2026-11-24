import { SvelteComponent } from 'svelte';

export interface FileChartBarCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileChartBarCornerCut extends SvelteComponent<FileChartBarCornerCutProps> {}
