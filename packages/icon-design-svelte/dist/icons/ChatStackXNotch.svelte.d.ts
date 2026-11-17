import { SvelteComponent } from 'svelte';

export interface ChatStackXNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXNotch extends SvelteComponent<ChatStackXNotchProps> {}
