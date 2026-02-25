import { SvelteComponent } from 'svelte';

export interface FormLockPasswordTooltipLabelDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormLockPasswordTooltipLabelDrop extends SvelteComponent<FormLockPasswordTooltipLabelDropProps> {}
