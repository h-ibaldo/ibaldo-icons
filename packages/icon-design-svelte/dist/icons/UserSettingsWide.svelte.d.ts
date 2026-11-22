import { SvelteComponent } from 'svelte';

export interface UserSettingsWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserSettingsWide extends SvelteComponent<UserSettingsWideProps> {}
