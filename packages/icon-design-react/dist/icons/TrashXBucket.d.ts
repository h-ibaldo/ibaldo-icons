import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashXBucketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashXBucket: ForwardRefExoticComponent<TrashXBucketProps & RefAttributes<SVGSVGElement>>;

export default TrashXBucket;
export { TrashXBucket };
