import type { DefineComponent } from 'vue';

export interface TrashSquareBucketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashSquareBucket: DefineComponent<TrashSquareBucketProps>;

export default TrashSquareBucket;
export { TrashSquareBucket };
