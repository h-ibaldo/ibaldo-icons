import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowRocketPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowRocketPlain: ForwardRefExoticComponent<WindowRocketPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowRocketPlain;
export { WindowRocketPlain };
