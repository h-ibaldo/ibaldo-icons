import { SvelteComponent } from 'svelte';

export interface UploadTrayStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadTrayStep extends SvelteComponent<UploadTrayStepProps> {}
