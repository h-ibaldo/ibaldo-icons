import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSyncRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSyncRound: ForwardRefExoticComponent<CloudSyncRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudSyncRound;
export { CloudSyncRound };
