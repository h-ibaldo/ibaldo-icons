import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CropDashed: ForwardRefExoticComponent<CropDashedProps & RefAttributes<SVGSVGElement>>;

export default CropDashed;
export { CropDashed };
