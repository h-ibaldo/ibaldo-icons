import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Plus12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Plus12: ForwardRefExoticComponent<Cloud3Plus12Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Plus12;
export { Cloud3Plus12 };
