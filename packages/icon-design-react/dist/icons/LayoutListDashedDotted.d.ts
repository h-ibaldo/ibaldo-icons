import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutListDashedDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutListDashedDotted: ForwardRefExoticComponent<LayoutListDashedDottedProps & RefAttributes<SVGSVGElement>>;

export default LayoutListDashedDotted;
export { LayoutListDashedDotted };
