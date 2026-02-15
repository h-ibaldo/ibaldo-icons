import { SvelteComponent } from 'svelte';

export interface Tab2ThreeDotsSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab2ThreeDotsSettings extends SvelteComponent<Tab2ThreeDotsSettingsProps> {}
