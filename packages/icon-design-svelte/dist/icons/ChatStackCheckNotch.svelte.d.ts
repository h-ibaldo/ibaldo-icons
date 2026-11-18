import { SvelteComponent } from 'svelte';

export interface ChatStackCheckNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckNotch extends SvelteComponent<ChatStackCheckNotchProps> {}
