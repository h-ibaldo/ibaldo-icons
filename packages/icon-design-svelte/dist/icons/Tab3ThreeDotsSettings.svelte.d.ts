import { SvelteComponent } from 'svelte';

export interface Tab3ThreeDotsSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3ThreeDotsSettings extends SvelteComponent<Tab3ThreeDotsSettingsProps> {}
