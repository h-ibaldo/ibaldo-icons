import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3UploadOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3UploadOpen: ForwardRefExoticComponent<Cloud3UploadOpenProps & RefAttributes<SVGSVGElement>>;

export default Cloud3UploadOpen;
export { Cloud3UploadOpen };
