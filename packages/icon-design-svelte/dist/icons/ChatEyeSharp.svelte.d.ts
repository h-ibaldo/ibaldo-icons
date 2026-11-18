import { SvelteComponent } from 'svelte';

export interface ChatEyeSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEyeSharp extends SvelteComponent<ChatEyeSharpProps> {}
