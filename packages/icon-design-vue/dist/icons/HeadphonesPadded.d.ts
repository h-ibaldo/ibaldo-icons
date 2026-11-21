import type { DefineComponent } from 'vue';

export interface HeadphonesPaddedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeadphonesPadded: DefineComponent<HeadphonesPaddedProps>;

export default HeadphonesPadded;
export { HeadphonesPadded };
