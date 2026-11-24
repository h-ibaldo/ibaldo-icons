import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStackTwo: ForwardRefExoticComponent<LayerStackTwoProps & RefAttributes<SVGSVGElement>>;

export default LayerStackTwo;
export { LayerStackTwo };
