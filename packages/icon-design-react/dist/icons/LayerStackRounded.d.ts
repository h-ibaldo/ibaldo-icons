import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayerStackRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayerStackRounded: ForwardRefExoticComponent<LayerStackRoundedProps & RefAttributes<SVGSVGElement>>;

export default LayerStackRounded;
export { LayerStackRounded };
