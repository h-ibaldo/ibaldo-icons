import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceLongWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceLongWavy: ForwardRefExoticComponent<AvatarFaceLongWavyProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceLongWavy;
export { AvatarFaceLongWavy };
