import { SvelteComponent } from 'svelte';

export interface ChatStackMinusCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusCornerNotch extends SvelteComponent<ChatStackMinusCornerNotchProps> {}
