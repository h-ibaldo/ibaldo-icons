import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2LightbulbProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Lightbulb: ForwardRefExoticComponent<Cloud2LightbulbProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Lightbulb;
export { Cloud2Lightbulb };
