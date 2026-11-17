import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FaceID3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FaceID3: ForwardRefExoticComponent<FaceID3Props & RefAttributes<SVGSVGElement>>;

export default FaceID3;
export { FaceID3 };
