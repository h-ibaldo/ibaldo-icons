import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3SendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Send: ForwardRefExoticComponent<Cloud3SendProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Send;
export { Cloud3Send };
