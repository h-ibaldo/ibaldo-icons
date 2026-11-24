import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowTogglePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowTogglePlain: ForwardRefExoticComponent<WindowTogglePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowTogglePlain;
export { WindowTogglePlain };
