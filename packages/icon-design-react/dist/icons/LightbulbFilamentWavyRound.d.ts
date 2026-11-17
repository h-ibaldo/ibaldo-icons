import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbFilamentWavyRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbFilamentWavyRound: ForwardRefExoticComponent<LightbulbFilamentWavyRoundProps & RefAttributes<SVGSVGElement>>;

export default LightbulbFilamentWavyRound;
export { LightbulbFilamentWavyRound };
