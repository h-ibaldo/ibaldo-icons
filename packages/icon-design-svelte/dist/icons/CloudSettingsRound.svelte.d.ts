import { SvelteComponent } from 'svelte';

export interface CloudSettingsRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSettingsRound extends SvelteComponent<CloudSettingsRoundProps> {}
