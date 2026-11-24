import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStack: ForwardRefExoticComponent<LayerStackProps & RefAttributes<SVGSVGElement>>;

export default LayerStack;
export { LayerStack };
