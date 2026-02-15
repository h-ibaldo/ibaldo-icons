import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadUpdatesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadUpdates: ForwardRefExoticComponent<UploadUpdatesProps & RefAttributes<SVGSVGElement>>;

export default UploadUpdates;
export { UploadUpdates };
