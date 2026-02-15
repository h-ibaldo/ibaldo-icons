import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3UnlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Unlock: ForwardRefExoticComponent<Cloud3UnlockProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Unlock;
export { Cloud3Unlock };
