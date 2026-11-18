import { SvelteComponent } from 'svelte';

export interface MicrophonePlayCircleBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophonePlayCircleBare extends SvelteComponent<MicrophonePlayCircleBareProps> {}
