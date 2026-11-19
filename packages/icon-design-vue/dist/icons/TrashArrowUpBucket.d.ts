import type { DefineComponent } from 'vue';

export interface TrashArrowUpBucketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashArrowUpBucket: DefineComponent<TrashArrowUpBucketProps>;

export default TrashArrowUpBucket;
export { TrashArrowUpBucket };
