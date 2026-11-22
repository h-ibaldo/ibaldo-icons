import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackOpenPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStackOpenPlus: ForwardRefExoticComponent<LayerStackOpenPlusProps & RefAttributes<SVGSVGElement>>;

export default LayerStackOpenPlus;
export { LayerStackOpenPlus };
