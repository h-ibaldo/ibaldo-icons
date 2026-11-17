import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandRefresh: ForwardRefExoticComponent<HandRefreshProps & RefAttributes<SVGSVGElement>>;

export default HandRefresh;
export { HandRefresh };
