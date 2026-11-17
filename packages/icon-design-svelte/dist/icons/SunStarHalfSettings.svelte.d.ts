import { SvelteComponent } from 'svelte';

export interface SunStarHalfSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunStarHalfSettings extends SvelteComponent<SunStarHalfSettingsProps> {}
