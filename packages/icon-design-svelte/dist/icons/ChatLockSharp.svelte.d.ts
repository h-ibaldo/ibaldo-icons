import { SvelteComponent } from 'svelte';

export interface ChatLockSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockSharp extends SvelteComponent<ChatLockSharpProps> {}
