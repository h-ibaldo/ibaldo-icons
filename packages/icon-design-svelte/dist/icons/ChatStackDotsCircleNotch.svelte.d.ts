import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCircleNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCircleNotch extends SvelteComponent<ChatStackDotsCircleNotchProps> {}
