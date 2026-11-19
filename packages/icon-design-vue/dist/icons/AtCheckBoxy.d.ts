import type { DefineComponent } from 'vue';

export interface AtCheckBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCheckBoxy: DefineComponent<AtCheckBoxyProps>;

export default AtCheckBoxy;
export { AtCheckBoxy };
