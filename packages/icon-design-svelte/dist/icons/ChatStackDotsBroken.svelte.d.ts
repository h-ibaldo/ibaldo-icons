import { SvelteComponent } from 'svelte';

export interface ChatStackDotsBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsBroken extends SvelteComponent<ChatStackDotsBrokenProps> {}
