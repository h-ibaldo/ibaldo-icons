import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudTriangleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudTriangleRound: ForwardRefExoticComponent<CloudTriangleRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudTriangleRound;
export { CloudTriangleRound };
