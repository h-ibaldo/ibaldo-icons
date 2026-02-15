import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Link3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Link3: ForwardRefExoticComponent<Cloud3Link3Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Link3;
export { Cloud3Link3 };
