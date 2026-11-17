import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowArrowLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowArrowLeftRight: ForwardRefExoticComponent<WindowArrowLeftRightProps & RefAttributes<SVGSVGElement>>;

export default WindowArrowLeftRight;
export { WindowArrowLeftRight };
