import { SvelteComponent } from 'svelte';

export interface Tab1ToolSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab1ToolSettings extends SvelteComponent<Tab1ToolSettingsProps> {}
