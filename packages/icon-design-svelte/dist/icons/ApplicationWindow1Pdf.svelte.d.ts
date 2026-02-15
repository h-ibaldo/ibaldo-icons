import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1PdfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1Pdf extends SvelteComponent<ApplicationWindow1PdfProps> {}
