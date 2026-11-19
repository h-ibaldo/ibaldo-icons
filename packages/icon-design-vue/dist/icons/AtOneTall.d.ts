import type { DefineComponent } from 'vue';

export interface AtOneTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtOneTall: DefineComponent<AtOneTallProps>;

export default AtOneTall;
export { AtOneTall };
