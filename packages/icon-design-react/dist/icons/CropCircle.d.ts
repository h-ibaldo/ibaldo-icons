import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CropCircle: ForwardRefExoticComponent<CropCircleProps & RefAttributes<SVGSVGElement>>;

export default CropCircle;
export { CropCircle };
