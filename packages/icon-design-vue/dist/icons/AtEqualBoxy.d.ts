import type { DefineComponent } from 'vue';

export interface AtEqualBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtEqualBoxy: DefineComponent<AtEqualBoxyProps>;

export default AtEqualBoxy;
export { AtEqualBoxy };
