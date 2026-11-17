import { SvelteComponent } from 'svelte';

export interface Tab3SettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3Settings extends SvelteComponent<Tab3SettingsProps> {}
