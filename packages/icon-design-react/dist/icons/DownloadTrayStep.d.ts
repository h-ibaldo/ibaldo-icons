import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadTrayStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadTrayStep: ForwardRefExoticComponent<DownloadTrayStepProps & RefAttributes<SVGSVGElement>>;

export default DownloadTrayStep;
export { DownloadTrayStep };
