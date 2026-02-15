import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1InternetExplorerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1InternetExplorer extends SvelteComponent<ApplicationWindow1InternetExplorerProps> {}
