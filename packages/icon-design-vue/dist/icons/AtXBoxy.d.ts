import type { DefineComponent } from 'vue';

export interface AtXBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtXBoxy: DefineComponent<AtXBoxyProps>;

export default AtXBoxy;
export { AtXBoxy };
