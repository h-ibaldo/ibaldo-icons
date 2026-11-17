import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarSmileFaceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarSmileFace: ForwardRefExoticComponent<StarSmileFaceProps & RefAttributes<SVGSVGElement>>;

export default StarSmileFace;
export { StarSmileFace };
