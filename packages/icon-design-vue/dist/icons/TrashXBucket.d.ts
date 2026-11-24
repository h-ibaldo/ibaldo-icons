import type { DefineComponent } from 'vue';

export interface TrashXBucketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashXBucket: DefineComponent<TrashXBucketProps>;

export default TrashXBucket;
export { TrashXBucket };
