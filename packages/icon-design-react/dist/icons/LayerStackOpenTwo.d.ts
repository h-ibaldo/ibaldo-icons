import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackOpenTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStackOpenTwo: ForwardRefExoticComponent<LayerStackOpenTwoProps & RefAttributes<SVGSVGElement>>;

export default LayerStackOpenTwo;
export { LayerStackOpenTwo };
