import { SvelteComponent } from 'svelte';

export interface ChatUserSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUserSharp extends SvelteComponent<ChatUserSharpProps> {}
