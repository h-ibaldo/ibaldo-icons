import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleTall extends SvelteComponent<ChatCheckDoubleTallProps> {}
