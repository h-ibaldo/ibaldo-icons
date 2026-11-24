import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenDockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenDock: ForwardRefExoticComponent<ScreenDockProps & RefAttributes<SVGSVGElement>>;

export default ScreenDock;
export { ScreenDock };
