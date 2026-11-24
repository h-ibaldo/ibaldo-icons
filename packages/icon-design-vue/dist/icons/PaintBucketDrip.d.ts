import type { DefineComponent } from 'vue';

export interface PaintBucketDripProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaintBucketDrip: DefineComponent<PaintBucketDripProps>;

export default PaintBucketDrip;
export { PaintBucketDrip };
