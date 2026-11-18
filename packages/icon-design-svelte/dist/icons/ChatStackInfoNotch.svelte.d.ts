import { SvelteComponent } from 'svelte';

export interface ChatStackInfoNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackInfoNotch extends SvelteComponent<ChatStackInfoNotchProps> {}
