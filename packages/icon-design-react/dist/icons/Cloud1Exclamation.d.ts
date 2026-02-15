import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1ExclamationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Exclamation: ForwardRefExoticComponent<Cloud1ExclamationProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Exclamation;
export { Cloud1Exclamation };
