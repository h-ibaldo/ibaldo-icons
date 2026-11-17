import { SvelteComponent } from 'svelte';

export interface ChatCheckCornerSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCornerSharp extends SvelteComponent<ChatCheckCornerSharpProps> {}
