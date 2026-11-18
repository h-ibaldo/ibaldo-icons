import { SvelteComponent } from 'svelte';

export interface MicrophoneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Microphone extends SvelteComponent<MicrophoneProps> {}
