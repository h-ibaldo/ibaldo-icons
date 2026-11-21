import { SvelteComponent } from 'svelte';

export interface VoicemailSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VoicemailSquare extends SvelteComponent<VoicemailSquareProps> {}
