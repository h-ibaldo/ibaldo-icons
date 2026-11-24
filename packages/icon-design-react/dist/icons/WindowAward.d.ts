import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowAwardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowAward: ForwardRefExoticComponent<WindowAwardProps & RefAttributes<SVGSVGElement>>;

export default WindowAward;
export { WindowAward };
