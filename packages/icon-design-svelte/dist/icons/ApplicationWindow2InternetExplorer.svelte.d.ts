import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2InternetExplorerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2InternetExplorer extends SvelteComponent<ApplicationWindow2InternetExplorerProps> {}
