import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Crop: ForwardRefExoticComponent<CropProps & RefAttributes<SVGSVGElement>>;

export default Crop;
export { Crop };
