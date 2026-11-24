import { SvelteComponent } from 'svelte';

export interface VoicemailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Voicemail extends SvelteComponent<VoicemailProps> {}
