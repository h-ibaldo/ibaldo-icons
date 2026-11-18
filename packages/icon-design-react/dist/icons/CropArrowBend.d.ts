import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropArrowBendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CropArrowBend: ForwardRefExoticComponent<CropArrowBendProps & RefAttributes<SVGSVGElement>>;

export default CropArrowBend;
export { CropArrowBend };
