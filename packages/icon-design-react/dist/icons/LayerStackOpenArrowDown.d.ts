import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackOpenArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStackOpenArrowDown: ForwardRefExoticComponent<LayerStackOpenArrowDownProps & RefAttributes<SVGSVGElement>>;

export default LayerStackOpenArrowDown;
export { LayerStackOpenArrowDown };
