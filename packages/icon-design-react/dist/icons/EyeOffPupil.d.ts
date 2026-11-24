import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeOffPupilProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeOffPupil: ForwardRefExoticComponent<EyeOffPupilProps & RefAttributes<SVGSVGElement>>;

export default EyeOffPupil;
export { EyeOffPupil };
