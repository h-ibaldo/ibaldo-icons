import { SvelteComponent } from 'svelte';

export interface CloudSettingsTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSettingsTall extends SvelteComponent<CloudSettingsTallProps> {}
