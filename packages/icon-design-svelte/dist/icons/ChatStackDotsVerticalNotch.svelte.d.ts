import { SvelteComponent } from 'svelte';

export interface ChatStackDotsVerticalNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsVerticalNotch extends SvelteComponent<ChatStackDotsVerticalNotchProps> {}
