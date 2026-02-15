import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2SpeechProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Speech extends SvelteComponent<ApplicationWindow2SpeechProps> {}
