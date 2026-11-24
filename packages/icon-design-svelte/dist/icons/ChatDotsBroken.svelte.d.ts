import { SvelteComponent } from 'svelte';

export interface ChatDotsBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsBroken extends SvelteComponent<ChatDotsBrokenProps> {}
