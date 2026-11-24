import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadLongWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadLongWavy: ForwardRefExoticComponent<AvatarHeadLongWavyProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadLongWavy;
export { AvatarHeadLongWavy };
