import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStackOpen: ForwardRefExoticComponent<LayerStackOpenProps & RefAttributes<SVGSVGElement>>;

export default LayerStackOpen;
export { LayerStackOpen };
