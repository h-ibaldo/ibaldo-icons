import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintBucketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaintBucket: ForwardRefExoticComponent<PaintBucketProps & RefAttributes<SVGSVGElement>>;

export default PaintBucket;
export { PaintBucket };
