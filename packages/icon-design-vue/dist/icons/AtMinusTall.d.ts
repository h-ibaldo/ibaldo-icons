import type { DefineComponent } from 'vue';

export interface AtMinusTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtMinusTall: DefineComponent<AtMinusTallProps>;

export default AtMinusTall;
export { AtMinusTall };
