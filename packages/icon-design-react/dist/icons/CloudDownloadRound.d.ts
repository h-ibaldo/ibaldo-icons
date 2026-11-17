import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudDownloadRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudDownloadRound: ForwardRefExoticComponent<CloudDownloadRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudDownloadRound;
export { CloudDownloadRound };
