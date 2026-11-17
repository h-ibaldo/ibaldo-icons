import { SvelteComponent } from 'svelte';

export interface ChatEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEdit extends SvelteComponent<ChatEditProps> {}
