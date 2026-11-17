import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppWindowCheck2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppWindowCheck2: ForwardRefExoticComponent<AppWindowCheck2Props & RefAttributes<SVGSVGElement>>;

export default AppWindowCheck2;
export { AppWindowCheck2 };
