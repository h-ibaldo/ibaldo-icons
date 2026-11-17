import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceShoulderSidePartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceShoulderSidePart: ForwardRefExoticComponent<AvatarFaceShoulderSidePartProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceShoulderSidePart;
export { AvatarFaceShoulderSidePart };
