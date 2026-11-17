import { SvelteComponent } from 'svelte';

export interface AtSign5SettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5Settings extends SvelteComponent<AtSign5SettingsProps> {}
