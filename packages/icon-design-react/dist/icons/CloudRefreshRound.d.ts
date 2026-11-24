import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudRefreshRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudRefreshRound: ForwardRefExoticComponent<CloudRefreshRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudRefreshRound;
export { CloudRefreshRound };
