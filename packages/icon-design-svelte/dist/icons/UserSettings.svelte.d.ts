import { SvelteComponent } from 'svelte';

export interface UserSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserSettings extends SvelteComponent<UserSettingsProps> {}
