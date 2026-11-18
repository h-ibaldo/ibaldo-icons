import { SvelteComponent } from 'svelte';

export interface MicrophoneOffBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneOffBoxy extends SvelteComponent<MicrophoneOffBoxyProps> {}
