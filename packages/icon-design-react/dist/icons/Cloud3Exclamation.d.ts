import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3ExclamationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Exclamation: ForwardRefExoticComponent<Cloud3ExclamationProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Exclamation;
export { Cloud3Exclamation };
