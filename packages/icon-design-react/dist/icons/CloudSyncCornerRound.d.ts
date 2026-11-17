import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSyncCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSyncCornerRound: ForwardRefExoticComponent<CloudSyncCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudSyncCornerRound;
export { CloudSyncCornerRound };
