import { SvelteComponent } from 'svelte';

export interface FormUsernameTooltipDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormUsernameTooltipDrop extends SvelteComponent<FormUsernameTooltipDropProps> {}
