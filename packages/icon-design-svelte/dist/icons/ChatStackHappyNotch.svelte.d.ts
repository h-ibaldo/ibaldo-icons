import { SvelteComponent } from 'svelte';

export interface ChatStackHappyNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHappyNotch extends SvelteComponent<ChatStackHappyNotchProps> {}
