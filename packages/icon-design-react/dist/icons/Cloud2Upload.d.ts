import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2UploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Upload: ForwardRefExoticComponent<Cloud2UploadProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Upload;
export { Cloud2Upload };
