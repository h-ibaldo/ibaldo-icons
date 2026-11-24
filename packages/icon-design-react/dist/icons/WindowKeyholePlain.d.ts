import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowKeyholePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowKeyholePlain: ForwardRefExoticComponent<WindowKeyholePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowKeyholePlain;
export { WindowKeyholePlain };
