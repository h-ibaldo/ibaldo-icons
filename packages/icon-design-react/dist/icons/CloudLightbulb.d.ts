import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLightbulbProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLightbulb: ForwardRefExoticComponent<CloudLightbulbProps & RefAttributes<SVGSVGElement>>;

export default CloudLightbulb;
export { CloudLightbulb };
