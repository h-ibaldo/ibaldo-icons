import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CropOff: ForwardRefExoticComponent<CropOffProps & RefAttributes<SVGSVGElement>>;

export default CropOff;
export { CropOff };
