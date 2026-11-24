import { SvelteComponent } from 'svelte';

export interface MicrophoneBanGrilleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneBanGrille extends SvelteComponent<MicrophoneBanGrilleProps> {}
