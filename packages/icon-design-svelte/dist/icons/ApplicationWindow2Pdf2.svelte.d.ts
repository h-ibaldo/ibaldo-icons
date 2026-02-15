import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2Pdf2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Pdf2 extends SvelteComponent<ApplicationWindow2Pdf2Props> {}
