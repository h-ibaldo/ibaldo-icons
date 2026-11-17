import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUploadRound: ForwardRefExoticComponent<CloudUploadRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudUploadRound;
export { CloudUploadRound };
