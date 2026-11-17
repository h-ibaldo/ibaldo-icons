import { SvelteComponent } from 'svelte';

export interface Poll6VerticalSpeechProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll6VerticalSpeech extends SvelteComponent<Poll6VerticalSpeechProps> {}
