import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Plus: ForwardRefExoticComponent<Cloud3PlusProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Plus;
export { Cloud3Plus };
