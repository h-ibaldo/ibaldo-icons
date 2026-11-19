import type { DefineComponent } from 'vue';

export interface AtPlusBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtPlusBoxy: DefineComponent<AtPlusBoxyProps>;

export default AtPlusBoxy;
export { AtPlusBoxy };
