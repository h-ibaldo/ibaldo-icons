import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1UnlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Unlock: ForwardRefExoticComponent<Cloud1UnlockProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Unlock;
export { Cloud1Unlock };
