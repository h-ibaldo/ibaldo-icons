import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseRefresh: ForwardRefExoticComponent<DatabaseRefreshProps & RefAttributes<SVGSVGElement>>;

export default DatabaseRefresh;
export { DatabaseRefresh };
