import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashArrowDownBucketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashArrowDownBucket: ForwardRefExoticComponent<TrashArrowDownBucketProps & RefAttributes<SVGSVGElement>>;

export default TrashArrowDownBucket;
export { TrashArrowDownBucket };
