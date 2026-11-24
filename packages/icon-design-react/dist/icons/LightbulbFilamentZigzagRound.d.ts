import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbFilamentZigzagRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbFilamentZigzagRound: ForwardRefExoticComponent<LightbulbFilamentZigzagRoundProps & RefAttributes<SVGSVGElement>>;

export default LightbulbFilamentZigzagRound;
export { LightbulbFilamentZigzagRound };
