import type { DefineComponent } from 'vue';

export interface AtDotsBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtDotsBoxy: DefineComponent<AtDotsBoxyProps>;

export default AtDotsBoxy;
export { AtDotsBoxy };
