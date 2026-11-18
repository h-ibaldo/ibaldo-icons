import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CropSync: ForwardRefExoticComponent<CropSyncProps & RefAttributes<SVGSVGElement>>;

export default CropSync;
export { CropSync };
