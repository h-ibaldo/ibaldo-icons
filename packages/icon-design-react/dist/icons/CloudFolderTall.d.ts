import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudFolderTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudFolderTall: ForwardRefExoticComponent<CloudFolderTallProps & RefAttributes<SVGSVGElement>>;

export default CloudFolderTall;
export { CloudFolderTall };
