import { SvelteComponent } from 'svelte';

export interface VoicemailBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VoicemailBars extends SvelteComponent<VoicemailBarsProps> {}
