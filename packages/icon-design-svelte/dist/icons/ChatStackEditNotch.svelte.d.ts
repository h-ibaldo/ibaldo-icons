import { SvelteComponent } from 'svelte';

export interface ChatStackEditNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEditNotch extends SvelteComponent<ChatStackEditNotchProps> {}
