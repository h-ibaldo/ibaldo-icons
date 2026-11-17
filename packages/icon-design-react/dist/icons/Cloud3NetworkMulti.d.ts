import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3NetworkMultiProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3NetworkMulti: ForwardRefExoticComponent<Cloud3NetworkMultiProps & RefAttributes<SVGSVGElement>>;

export default Cloud3NetworkMulti;
export { Cloud3NetworkMulti };
