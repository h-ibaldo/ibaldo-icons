import { SvelteComponent } from 'svelte';

export interface MicrophoneBanBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneBanBare extends SvelteComponent<MicrophoneBanBareProps> {}
