import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2ExclamationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Exclamation: ForwardRefExoticComponent<Cloud2ExclamationProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Exclamation;
export { Cloud2Exclamation };
