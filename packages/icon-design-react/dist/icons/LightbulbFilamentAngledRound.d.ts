import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbFilamentAngledRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbFilamentAngledRound: ForwardRefExoticComponent<LightbulbFilamentAngledRoundProps & RefAttributes<SVGSVGElement>>;

export default LightbulbFilamentAngledRound;
export { LightbulbFilamentAngledRound };
