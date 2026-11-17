import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppWindowCheck1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppWindowCheck1: ForwardRefExoticComponent<AppWindowCheck1Props & RefAttributes<SVGSVGElement>>;

export default AppWindowCheck1;
export { AppWindowCheck1 };
