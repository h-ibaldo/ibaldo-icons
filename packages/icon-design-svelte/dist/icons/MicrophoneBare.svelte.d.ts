import { SvelteComponent } from 'svelte';

export interface MicrophoneBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneBare extends SvelteComponent<MicrophoneBareProps> {}
