import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListXCircle: ForwardRefExoticComponent<WindowListXCircleProps & RefAttributes<SVGSVGElement>>;

export default WindowListXCircle;
export { WindowListXCircle };
