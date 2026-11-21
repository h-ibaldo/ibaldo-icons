import type { DefineComponent } from 'vue';

export interface WebcamWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WebcamWide: DefineComponent<WebcamWideProps>;

export default WebcamWide;
export { WebcamWide };
