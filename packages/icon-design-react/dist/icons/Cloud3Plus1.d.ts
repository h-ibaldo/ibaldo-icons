import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Plus1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Plus1: ForwardRefExoticComponent<Cloud3Plus1Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Plus1;
export { Cloud3Plus1 };
