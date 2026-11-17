import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AsteriskRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AsteriskRefresh: ForwardRefExoticComponent<AsteriskRefreshProps & RefAttributes<SVGSVGElement>>;

export default AsteriskRefresh;
export { AsteriskRefresh };
