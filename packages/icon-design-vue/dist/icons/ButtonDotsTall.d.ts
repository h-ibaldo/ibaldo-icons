import type { DefineComponent } from 'vue';

export interface ButtonDotsTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonDotsTall: DefineComponent<ButtonDotsTallProps>;

export default ButtonDotsTall;
export { ButtonDotsTall };
