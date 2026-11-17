import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VoteTrianglesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VoteTriangles: ForwardRefExoticComponent<VoteTrianglesProps & RefAttributes<SVGSVGElement>>;

export default VoteTriangles;
export { VoteTriangles };
