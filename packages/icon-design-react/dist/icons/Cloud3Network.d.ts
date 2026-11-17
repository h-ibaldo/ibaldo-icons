import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3NetworkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Network: ForwardRefExoticComponent<Cloud3NetworkProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Network;
export { Cloud3Network };
