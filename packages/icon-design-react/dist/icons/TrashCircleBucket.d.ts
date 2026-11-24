import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashCircleBucketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashCircleBucket: ForwardRefExoticComponent<TrashCircleBucketProps & RefAttributes<SVGSVGElement>>;

export default TrashCircleBucket;
export { TrashCircleBucket };
