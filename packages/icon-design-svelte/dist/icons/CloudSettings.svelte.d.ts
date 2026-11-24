import { SvelteComponent } from 'svelte';

export interface CloudSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSettings extends SvelteComponent<CloudSettingsProps> {}
