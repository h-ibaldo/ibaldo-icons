import type { DefineComponent } from 'vue';

export interface HeadphonesTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeadphonesTilted: DefineComponent<HeadphonesTiltedProps>;

export default HeadphonesTilted;
export { HeadphonesTilted };
