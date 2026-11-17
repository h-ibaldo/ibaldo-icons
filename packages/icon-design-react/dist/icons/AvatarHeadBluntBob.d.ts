import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadBluntBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadBluntBob: ForwardRefExoticComponent<AvatarHeadBluntBobProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadBluntBob;
export { AvatarHeadBluntBob };
