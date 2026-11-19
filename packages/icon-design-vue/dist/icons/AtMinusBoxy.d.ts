import type { DefineComponent } from 'vue';

export interface AtMinusBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtMinusBoxy: DefineComponent<AtMinusBoxyProps>;

export default AtMinusBoxy;
export { AtMinusBoxy };
