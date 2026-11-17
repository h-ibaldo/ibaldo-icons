import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppWindowCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppWindowClose: ForwardRefExoticComponent<AppWindowCloseProps & RefAttributes<SVGSVGElement>>;

export default AppWindowClose;
export { AppWindowClose };
