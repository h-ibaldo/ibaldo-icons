import { SvelteComponent } from 'svelte';

export interface FormUsernameTooltipSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormUsernameTooltipSquare extends SvelteComponent<FormUsernameTooltipSquareProps> {}
