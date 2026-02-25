import { SvelteComponent } from 'svelte';

export interface Tab1ThreeDotsSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab1ThreeDotsSettings extends SvelteComponent<Tab1ThreeDotsSettingsProps> {}
