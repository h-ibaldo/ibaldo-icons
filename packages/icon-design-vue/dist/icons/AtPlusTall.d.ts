import type { DefineComponent } from 'vue';

export interface AtPlusTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtPlusTall: DefineComponent<AtPlusTallProps>;

export default AtPlusTall;
export { AtPlusTall };
