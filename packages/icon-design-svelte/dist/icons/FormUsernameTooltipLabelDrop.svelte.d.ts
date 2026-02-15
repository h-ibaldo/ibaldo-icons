import { SvelteComponent } from 'svelte';

export interface FormUsernameTooltipLabelDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormUsernameTooltipLabelDrop extends SvelteComponent<FormUsernameTooltipLabelDropProps> {}
