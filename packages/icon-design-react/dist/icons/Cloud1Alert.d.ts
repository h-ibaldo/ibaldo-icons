import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1AlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Alert: ForwardRefExoticComponent<Cloud1AlertProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Alert;
export { Cloud1Alert };
