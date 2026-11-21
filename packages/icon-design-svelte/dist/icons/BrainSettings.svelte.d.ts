import { SvelteComponent } from 'svelte';

export interface BrainSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrainSettings extends SvelteComponent<BrainSettingsProps> {}
