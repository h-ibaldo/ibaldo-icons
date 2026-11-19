import type { DefineComponent } from 'vue';

export interface ButtonPillProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonPill: DefineComponent<ButtonPillProps>;

export default ButtonPill;
export { ButtonPill };
