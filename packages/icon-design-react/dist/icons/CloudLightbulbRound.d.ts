import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLightbulbRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLightbulbRound: ForwardRefExoticComponent<CloudLightbulbRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudLightbulbRound;
export { CloudLightbulbRound };
