import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3UploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Upload: ForwardRefExoticComponent<Cloud3UploadProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Upload;
export { Cloud3Upload };
