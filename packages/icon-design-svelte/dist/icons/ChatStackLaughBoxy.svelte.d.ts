import { SvelteComponent } from 'svelte';

export interface ChatStackLaughBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLaughBoxy extends SvelteComponent<ChatStackLaughBoxyProps> {}
