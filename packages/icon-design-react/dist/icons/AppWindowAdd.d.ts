import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppWindowAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppWindowAdd: ForwardRefExoticComponent<AppWindowAddProps & RefAttributes<SVGSVGElement>>;

export default AppWindowAdd;
export { AppWindowAdd };
