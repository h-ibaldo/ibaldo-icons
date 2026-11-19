import type { DefineComponent } from 'vue';

export interface TrashCircleBucketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashCircleBucket: DefineComponent<TrashCircleBucketProps>;

export default TrashCircleBucket;
export { TrashCircleBucket };
