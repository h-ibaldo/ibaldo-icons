import { SvelteComponent } from 'svelte';

export interface ChatTextOffSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextOffSharp extends SvelteComponent<ChatTextOffSharpProps> {}
