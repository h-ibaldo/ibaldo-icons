import { SvelteComponent } from 'svelte';

export interface EyeOffPupilProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeOffPupil extends SvelteComponent<EyeOffPupilProps> {}
