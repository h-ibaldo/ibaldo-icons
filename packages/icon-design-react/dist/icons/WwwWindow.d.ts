import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WwwWindowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WwwWindow: ForwardRefExoticComponent<WwwWindowProps & RefAttributes<SVGSVGElement>>;

export default WwwWindow;
export { WwwWindow };
