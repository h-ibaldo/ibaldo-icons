import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudFolderRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudFolderRound: ForwardRefExoticComponent<CloudFolderRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudFolderRound;
export { CloudFolderRound };
