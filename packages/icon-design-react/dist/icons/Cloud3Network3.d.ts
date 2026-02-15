import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Network3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Network3: ForwardRefExoticComponent<Cloud3Network3Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Network3;
export { Cloud3Network3 };
