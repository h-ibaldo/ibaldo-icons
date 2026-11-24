import { SvelteComponent } from 'svelte';

export interface PhoneVoicemailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneVoicemail extends SvelteComponent<PhoneVoicemailProps> {}
