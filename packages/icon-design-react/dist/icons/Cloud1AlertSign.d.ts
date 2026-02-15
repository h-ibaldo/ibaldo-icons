import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1AlertSignProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1AlertSign: ForwardRefExoticComponent<Cloud1AlertSignProps & RefAttributes<SVGSVGElement>>;

export default Cloud1AlertSign;
export { Cloud1AlertSign };
