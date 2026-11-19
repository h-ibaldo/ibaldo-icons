import type { DefineComponent } from 'vue';

export interface TrashArrowDownBucketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashArrowDownBucket: DefineComponent<TrashArrowDownBucketProps>;

export default TrashArrowDownBucket;
export { TrashArrowDownBucket };
