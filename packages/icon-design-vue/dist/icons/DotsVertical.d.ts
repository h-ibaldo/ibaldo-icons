import type { DefineComponent } from 'vue';

export interface DotsVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DotsVertical: DefineComponent<DotsVerticalProps>;

export default DotsVertical;
export { DotsVertical };
