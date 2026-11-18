import { SvelteComponent } from 'svelte';

export interface ChatStackCheckDoubleNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckDoubleNotch extends SvelteComponent<ChatStackCheckDoubleNotchProps> {}
