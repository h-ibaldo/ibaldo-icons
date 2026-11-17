import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLightbulbTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLightbulbTall: ForwardRefExoticComponent<CloudLightbulbTallProps & RefAttributes<SVGSVGElement>>;

export default CloudLightbulbTall;
export { CloudLightbulbTall };
