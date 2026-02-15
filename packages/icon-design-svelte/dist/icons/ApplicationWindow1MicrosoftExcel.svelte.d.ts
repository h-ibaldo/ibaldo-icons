import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1MicrosoftExcelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1MicrosoftExcel extends SvelteComponent<ApplicationWindow1MicrosoftExcelProps> {}
