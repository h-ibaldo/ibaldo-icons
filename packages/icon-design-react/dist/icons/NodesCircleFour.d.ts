import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesCircleFourProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesCircleFour: ForwardRefExoticComponent<NodesCircleFourProps & RefAttributes<SVGSVGElement>>;

export default NodesCircleFour;
export { NodesCircleFour };
