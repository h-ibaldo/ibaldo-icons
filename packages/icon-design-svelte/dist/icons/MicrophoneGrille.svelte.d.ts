import { SvelteComponent } from 'svelte';

export interface MicrophoneGrilleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneGrille extends SvelteComponent<MicrophoneGrilleProps> {}
