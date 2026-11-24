import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudFolderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudFolder: ForwardRefExoticComponent<CloudFolderProps & RefAttributes<SVGSVGElement>>;

export default CloudFolder;
export { CloudFolder };
