import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2ToolsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Tools extends SvelteComponent<ApplicationWindow2ToolsProps> {}
