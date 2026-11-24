import { SvelteComponent } from 'svelte';

export interface HandSettingsRaysProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSettingsRays extends SvelteComponent<HandSettingsRaysProps> {}
