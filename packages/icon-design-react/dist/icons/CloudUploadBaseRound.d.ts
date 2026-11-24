import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadBaseRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUploadBaseRound: ForwardRefExoticComponent<CloudUploadBaseRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudUploadBaseRound;
export { CloudUploadBaseRound };
