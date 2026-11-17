import { SvelteComponent } from 'svelte';

export interface MicrophoneBanBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneBanBoxy extends SvelteComponent<MicrophoneBanBoxyProps> {}
