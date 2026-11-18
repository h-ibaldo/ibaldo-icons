import { SvelteComponent } from 'svelte';

export interface ChatLockCornerSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockCornerSharp extends SvelteComponent<ChatLockCornerSharpProps> {}
