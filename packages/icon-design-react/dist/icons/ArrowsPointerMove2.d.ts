import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsPointerMove2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsPointerMove2: ForwardRefExoticComponent<ArrowsPointerMove2Props & RefAttributes<SVGSVGElement>>;

export default ArrowsPointerMove2;
export { ArrowsPointerMove2 };
