import { SvelteComponent } from 'svelte';

export interface ChatStackHashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHash extends SvelteComponent<ChatStackHashProps> {}
