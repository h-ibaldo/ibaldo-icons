import type { DefineComponent } from 'vue';

export interface DotsVerticalSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DotsVerticalSmall: DefineComponent<DotsVerticalSmallProps>;

export default DotsVerticalSmall;
export { DotsVerticalSmall };
