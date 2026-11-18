import { SvelteComponent } from 'svelte';

export interface MicrophoneOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneOff extends SvelteComponent<MicrophoneOffProps> {}
