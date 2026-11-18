import { SvelteComponent } from 'svelte';

export interface ChatPlusCornerSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCornerSharp extends SvelteComponent<ChatPlusCornerSharpProps> {}
