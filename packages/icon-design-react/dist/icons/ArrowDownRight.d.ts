import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownRight: ForwardRefExoticComponent<ArrowDownRightProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownRight;
export { ArrowDownRight };
