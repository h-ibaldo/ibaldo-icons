import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbRound: ForwardRefExoticComponent<LightbulbRoundProps & RefAttributes<SVGSVGElement>>;

export default LightbulbRound;
export { LightbulbRound };
