import { SvelteComponent } from 'svelte';

export interface MicrophonePlayCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophonePlayCircle extends SvelteComponent<MicrophonePlayCircleProps> {}
