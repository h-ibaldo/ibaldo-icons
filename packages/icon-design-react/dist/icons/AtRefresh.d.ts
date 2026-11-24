import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtRefresh: ForwardRefExoticComponent<AtRefreshProps & RefAttributes<SVGSVGElement>>;

export default AtRefresh;
export { AtRefresh };
