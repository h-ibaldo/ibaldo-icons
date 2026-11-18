import { SvelteComponent } from 'svelte';

export interface ChatMinusCircleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCircleBoxy extends SvelteComponent<ChatMinusCircleBoxyProps> {}
