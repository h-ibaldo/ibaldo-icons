import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RocketUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RocketUp: ForwardRefExoticComponent<RocketUpProps & RefAttributes<SVGSVGElement>>;

export default RocketUp;
export { RocketUp };
