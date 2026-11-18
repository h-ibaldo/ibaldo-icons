import { SvelteComponent } from 'svelte';

export interface ChatXSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXSharp extends SvelteComponent<ChatXSharpProps> {}
