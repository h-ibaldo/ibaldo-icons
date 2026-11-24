import { SvelteComponent } from 'svelte';

export interface ChatStackLaughNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLaughNotch extends SvelteComponent<ChatStackLaughNotchProps> {}
