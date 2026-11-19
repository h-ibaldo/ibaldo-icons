import type { DefineComponent } from 'vue';

export interface TrashCheckBucketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashCheckBucket: DefineComponent<TrashCheckBucketProps>;

export default TrashCheckBucket;
export { TrashCheckBucket };
