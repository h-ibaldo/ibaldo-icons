import { SvelteComponent } from 'svelte';

export interface ServerSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ServerSettings extends SvelteComponent<ServerSettingsProps> {}
