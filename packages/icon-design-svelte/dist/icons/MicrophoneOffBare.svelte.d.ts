import { SvelteComponent } from 'svelte';

export interface MicrophoneOffBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneOffBare extends SvelteComponent<MicrophoneOffBareProps> {}
