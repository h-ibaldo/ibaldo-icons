import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadSpikyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadSpiky: ForwardRefExoticComponent<AvatarHeadSpikyProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadSpiky;
export { AvatarHeadSpiky };
