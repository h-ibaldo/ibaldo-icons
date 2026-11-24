import type { DefineComponent } from 'vue';

export interface WebcamRingWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WebcamRingWide: DefineComponent<WebcamRingWideProps>;

export default WebcamRingWide;
export { WebcamRingWide };
