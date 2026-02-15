import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2UnlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Unlock: ForwardRefExoticComponent<Cloud2UnlockProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Unlock;
export { Cloud2Unlock };
