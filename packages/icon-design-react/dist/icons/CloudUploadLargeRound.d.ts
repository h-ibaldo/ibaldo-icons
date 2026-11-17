import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadLargeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUploadLargeRound: ForwardRefExoticComponent<CloudUploadLargeRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudUploadLargeRound;
export { CloudUploadLargeRound };
