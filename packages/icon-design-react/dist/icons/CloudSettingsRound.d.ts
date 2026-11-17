import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSettingsRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSettingsRound: ForwardRefExoticComponent<CloudSettingsRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudSettingsRound;
export { CloudSettingsRound };
