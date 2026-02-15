import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Plus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Plus2: ForwardRefExoticComponent<Cloud3Plus2Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Plus2;
export { Cloud3Plus2 };
