import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashCheckBucketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashCheckBucket: ForwardRefExoticComponent<TrashCheckBucketProps & RefAttributes<SVGSVGElement>>;

export default TrashCheckBucket;
export { TrashCheckBucket };
