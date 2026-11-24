import { SvelteComponent } from 'svelte';

export interface FileChartBarPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileChartBarPlain extends SvelteComponent<FileChartBarPlainProps> {}
