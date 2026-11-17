import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3PlusAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3PlusAlt: ForwardRefExoticComponent<Cloud3PlusAltProps & RefAttributes<SVGSVGElement>>;

export default Cloud3PlusAlt;
export { Cloud3PlusAlt };
