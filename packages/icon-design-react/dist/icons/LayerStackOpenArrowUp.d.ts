import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackOpenArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStackOpenArrowUp: ForwardRefExoticComponent<LayerStackOpenArrowUpProps & RefAttributes<SVGSVGElement>>;

export default LayerStackOpenArrowUp;
export { LayerStackOpenArrowUp };
