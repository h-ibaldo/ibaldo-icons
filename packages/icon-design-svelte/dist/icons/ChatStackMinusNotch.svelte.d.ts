import { SvelteComponent } from 'svelte';

export interface ChatStackMinusNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusNotch extends SvelteComponent<ChatStackMinusNotchProps> {}
