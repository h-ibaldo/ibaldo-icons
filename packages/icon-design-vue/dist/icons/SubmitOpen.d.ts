import type { DefineComponent } from 'vue';

export interface SubmitOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SubmitOpen: DefineComponent<SubmitOpenProps>;

export default SubmitOpen;
export { SubmitOpen };
