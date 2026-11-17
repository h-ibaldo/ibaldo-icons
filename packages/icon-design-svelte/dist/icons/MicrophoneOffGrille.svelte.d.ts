import { SvelteComponent } from 'svelte';

export interface MicrophoneOffGrilleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MicrophoneOffGrille extends SvelteComponent<MicrophoneOffGrilleProps> {}
