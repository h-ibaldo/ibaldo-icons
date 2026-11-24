import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearDownloadRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearDownloadRound: ForwardRefExoticComponent<GearDownloadRoundProps & RefAttributes<SVGSVGElement>>;

export default GearDownloadRound;
export { GearDownloadRound };
