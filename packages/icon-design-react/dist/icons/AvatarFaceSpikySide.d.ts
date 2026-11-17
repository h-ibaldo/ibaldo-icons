import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceSpikySideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceSpikySide: ForwardRefExoticComponent<AvatarFaceSpikySideProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceSpikySide;
export { AvatarFaceSpikySide };
