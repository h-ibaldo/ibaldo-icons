import { SvelteComponent } from 'svelte';

export interface ChatPlusBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusBoxy extends SvelteComponent<ChatPlusBoxyProps> {}
