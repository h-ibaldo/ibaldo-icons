import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbShineRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbShineRound: ForwardRefExoticComponent<LightbulbShineRoundProps & RefAttributes<SVGSVGElement>>;

export default LightbulbShineRound;
export { LightbulbShineRound };
