import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3UploadAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3UploadAlt: ForwardRefExoticComponent<Cloud3UploadAltProps & RefAttributes<SVGSVGElement>>;

export default Cloud3UploadAlt;
export { Cloud3UploadAlt };
