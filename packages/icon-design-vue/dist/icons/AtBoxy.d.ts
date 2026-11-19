import type { DefineComponent } from 'vue';

export interface AtBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtBoxy: DefineComponent<AtBoxyProps>;

export default AtBoxy;
export { AtBoxy };
