import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1ColorPickerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1ColorPicker extends SvelteComponent<ApplicationWindow1ColorPickerProps> {}
