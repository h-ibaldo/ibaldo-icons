import { SvelteComponent } from 'svelte';

export interface EyeOffLargePupilProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeOffLargePupil extends SvelteComponent<EyeOffLargePupilProps> {}
