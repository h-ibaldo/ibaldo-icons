import { SvelteComponent } from 'svelte';

export interface RotateScreenSpeakerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreenSpeaker extends SvelteComponent<RotateScreenSpeakerProps> {}
