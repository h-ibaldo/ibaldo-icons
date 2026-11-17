import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadCrewCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadCrewCut: ForwardRefExoticComponent<AvatarHeadCrewCutProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadCrewCut;
export { AvatarHeadCrewCut };
