import { SvelteComponent } from 'svelte';

export interface ChatLaughBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLaughBoxy extends SvelteComponent<ChatLaughBoxyProps> {}
