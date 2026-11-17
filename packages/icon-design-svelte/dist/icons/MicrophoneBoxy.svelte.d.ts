import { SvelteComponent } from 'svelte';

export interface MicrophoneBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneBoxy extends SvelteComponent<MicrophoneBoxyProps> {}
