import { SvelteComponent } from 'svelte';

export interface MicrophonePlayCircleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophonePlayCircleBoxy extends SvelteComponent<MicrophonePlayCircleBoxyProps> {}
