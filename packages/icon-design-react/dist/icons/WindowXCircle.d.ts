import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowXCircle: ForwardRefExoticComponent<WindowXCircleProps & RefAttributes<SVGSVGElement>>;

export default WindowXCircle;
export { WindowXCircle };
