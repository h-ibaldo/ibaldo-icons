import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceBowlCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceBowlCut: ForwardRefExoticComponent<AvatarFaceBowlCutProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceBowlCut;
export { AvatarFaceBowlCut };
