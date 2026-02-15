import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3SadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Sad: ForwardRefExoticComponent<Cloud3SadProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Sad;
export { Cloud3Sad };
