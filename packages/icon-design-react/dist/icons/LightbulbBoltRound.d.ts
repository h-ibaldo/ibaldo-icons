import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbBoltRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbBoltRound: ForwardRefExoticComponent<LightbulbBoltRoundProps & RefAttributes<SVGSVGElement>>;

export default LightbulbBoltRound;
export { LightbulbBoltRound };
