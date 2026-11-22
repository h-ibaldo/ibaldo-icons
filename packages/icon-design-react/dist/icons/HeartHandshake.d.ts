import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartHandshakeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartHandshake: ForwardRefExoticComponent<HeartHandshakeProps & RefAttributes<SVGSVGElement>>;

export default HeartHandshake;
export { HeartHandshake };
