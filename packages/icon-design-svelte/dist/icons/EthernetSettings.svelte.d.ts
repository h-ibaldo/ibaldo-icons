import { SvelteComponent } from 'svelte';

export interface EthernetSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EthernetSettings extends SvelteComponent<EthernetSettingsProps> {}
