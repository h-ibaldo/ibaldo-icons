import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashSquareBucketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashSquareBucket: ForwardRefExoticComponent<TrashSquareBucketProps & RefAttributes<SVGSVGElement>>;

export default TrashSquareBucket;
export { TrashSquareBucket };
