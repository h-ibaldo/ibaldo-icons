import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadSpikySideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadSpikySide: ForwardRefExoticComponent<AvatarHeadSpikySideProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadSpikySide;
export { AvatarHeadSpikySide };
