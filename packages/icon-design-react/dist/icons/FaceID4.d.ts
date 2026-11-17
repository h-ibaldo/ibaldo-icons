import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FaceID4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FaceID4: ForwardRefExoticComponent<FaceID4Props & RefAttributes<SVGSVGElement>>;

export default FaceID4;
export { FaceID4 };
