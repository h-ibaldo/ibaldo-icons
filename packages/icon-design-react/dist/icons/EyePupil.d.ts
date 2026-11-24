import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyePupilProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyePupil: ForwardRefExoticComponent<EyePupilProps & RefAttributes<SVGSVGElement>>;

export default EyePupil;
export { EyePupil };
