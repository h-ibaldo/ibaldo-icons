import type { DefineComponent } from 'vue';

export interface SelfieButtonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SelfieButton: DefineComponent<SelfieButtonProps>;

export default SelfieButton;
export { SelfieButton };
