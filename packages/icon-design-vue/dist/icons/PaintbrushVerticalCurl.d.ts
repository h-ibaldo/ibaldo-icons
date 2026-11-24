import type { DefineComponent } from 'vue';

export interface PaintbrushVerticalCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaintbrushVerticalCurl: DefineComponent<PaintbrushVerticalCurlProps>;

export default PaintbrushVerticalCurl;
export { PaintbrushVerticalCurl };
