import { SvelteComponent } from 'svelte';

export interface CursorRectangleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorRectangleDashed extends SvelteComponent<CursorRectangleDashedProps> {}
