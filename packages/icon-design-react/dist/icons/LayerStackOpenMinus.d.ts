import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackOpenMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStackOpenMinus: ForwardRefExoticComponent<LayerStackOpenMinusProps & RefAttributes<SVGSVGElement>>;

export default LayerStackOpenMinus;
export { LayerStackOpenMinus };
