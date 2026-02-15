import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2PdfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Pdf extends SvelteComponent<ApplicationWindow2PdfProps> {}
