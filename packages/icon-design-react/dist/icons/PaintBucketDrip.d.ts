import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintBucketDripProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaintBucketDrip: ForwardRefExoticComponent<PaintBucketDripProps & RefAttributes<SVGSVGElement>>;

export default PaintBucketDrip;
export { PaintBucketDrip };
