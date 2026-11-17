import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutListDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutListDashed: ForwardRefExoticComponent<LayoutListDashedProps & RefAttributes<SVGSVGElement>>;

export default LayoutListDashed;
export { LayoutListDashed };
