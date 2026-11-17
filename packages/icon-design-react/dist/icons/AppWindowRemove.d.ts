import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppWindowRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppWindowRemove: ForwardRefExoticComponent<AppWindowRemoveProps & RefAttributes<SVGSVGElement>>;

export default AppWindowRemove;
export { AppWindowRemove };
