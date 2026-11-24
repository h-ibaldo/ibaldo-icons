import type { DefineComponent } from 'vue';

export interface AtOneBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtOneBoxy: DefineComponent<AtOneBoxyProps>;

export default AtOneBoxy;
export { AtOneBoxy };
