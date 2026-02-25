import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud32: ForwardRefExoticComponent<Cloud32Props & RefAttributes<SVGSVGElement>>;

export default Cloud32;
export { Cloud32 };
