import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1ExcelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1Excel extends SvelteComponent<ApplicationWindow1ExcelProps> {}
