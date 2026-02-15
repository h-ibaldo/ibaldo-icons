import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2ArrowUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2ArrowUpDown: ForwardRefExoticComponent<Cloud2ArrowUpDownProps & RefAttributes<SVGSVGElement>>;

export default Cloud2ArrowUpDown;
export { Cloud2ArrowUpDown };
