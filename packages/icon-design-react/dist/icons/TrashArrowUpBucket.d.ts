import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashArrowUpBucketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashArrowUpBucket: ForwardRefExoticComponent<TrashArrowUpBucketProps & RefAttributes<SVGSVGElement>>;

export default TrashArrowUpBucket;
export { TrashArrowUpBucket };
