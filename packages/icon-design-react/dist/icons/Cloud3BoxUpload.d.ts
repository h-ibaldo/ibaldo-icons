import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3BoxUploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3BoxUpload: ForwardRefExoticComponent<Cloud3BoxUploadProps & RefAttributes<SVGSVGElement>>;

export default Cloud3BoxUpload;
export { Cloud3BoxUpload };
