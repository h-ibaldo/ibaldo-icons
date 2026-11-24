import { SvelteComponent } from 'svelte';

export interface CursorSquareDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorSquareDashed extends SvelteComponent<CursorSquareDashedProps> {}
