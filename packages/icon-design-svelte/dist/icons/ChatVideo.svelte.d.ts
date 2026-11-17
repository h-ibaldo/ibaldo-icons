import { SvelteComponent } from 'svelte';

export interface ChatVideoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVideo extends SvelteComponent<ChatVideoProps> {}
