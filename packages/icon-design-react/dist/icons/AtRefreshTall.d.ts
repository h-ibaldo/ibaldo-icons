import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtRefreshTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtRefreshTall: ForwardRefExoticComponent<AtRefreshTallProps & RefAttributes<SVGSVGElement>>;

export default AtRefreshTall;
export { AtRefreshTall };
