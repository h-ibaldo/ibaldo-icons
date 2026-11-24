import { SvelteComponent } from 'svelte';

export interface FileChartBarCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileChartBarCorner extends SvelteComponent<FileChartBarCornerProps> {}
