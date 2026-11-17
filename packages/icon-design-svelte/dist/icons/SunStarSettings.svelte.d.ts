import { SvelteComponent } from 'svelte';

export interface SunStarSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunStarSettings extends SvelteComponent<SunStarSettingsProps> {}
