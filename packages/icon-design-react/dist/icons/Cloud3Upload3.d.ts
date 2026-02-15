import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Upload3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Upload3: ForwardRefExoticComponent<Cloud3Upload3Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Upload3;
export { Cloud3Upload3 };
