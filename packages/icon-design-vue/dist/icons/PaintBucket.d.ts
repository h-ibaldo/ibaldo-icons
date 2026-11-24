import type { DefineComponent } from 'vue';

export interface PaintBucketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaintBucket: DefineComponent<PaintBucketProps>;

export default PaintBucket;
export { PaintBucket };
