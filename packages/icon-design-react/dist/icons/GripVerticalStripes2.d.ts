import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripVerticalStripes2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripVerticalStripes2: ForwardRefExoticComponent<GripVerticalStripes2Props & RefAttributes<SVGSVGElement>>;

export default GripVerticalStripes2;
export { GripVerticalStripes2 };
