import { SvelteComponent } from 'svelte';

export interface ChatXDoubleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXDoubleSharp extends SvelteComponent<ChatXDoubleSharpProps> {}
