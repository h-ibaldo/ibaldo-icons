import { SvelteComponent } from 'svelte';

export interface Tab4ThreeDotsSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4ThreeDotsSettings extends SvelteComponent<Tab4ThreeDotsSettingsProps> {}
