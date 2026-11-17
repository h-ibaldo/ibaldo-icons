import { SvelteComponent } from 'svelte';

export interface Tab4SettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4Settings extends SvelteComponent<Tab4SettingsProps> {}
