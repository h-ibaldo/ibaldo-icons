import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2DownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Download: ForwardRefExoticComponent<Cloud2DownloadProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Download;
export { Cloud2Download };
