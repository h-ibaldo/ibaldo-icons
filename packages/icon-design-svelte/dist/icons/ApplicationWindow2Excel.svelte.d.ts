import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2ExcelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Excel extends SvelteComponent<ApplicationWindow2ExcelProps> {}
