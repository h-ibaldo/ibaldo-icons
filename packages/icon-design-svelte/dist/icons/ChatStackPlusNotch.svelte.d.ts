import { SvelteComponent } from 'svelte';

export interface ChatStackPlusNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusNotch extends SvelteComponent<ChatStackPlusNotchProps> {}
