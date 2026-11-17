import { SvelteComponent } from 'svelte';

export interface ChatInfoItalicSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatInfoItalicSharp extends SvelteComponent<ChatInfoItalicSharpProps> {}
