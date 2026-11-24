import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbFilamentWavyScrewProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbFilamentWavyScrew: ForwardRefExoticComponent<LightbulbFilamentWavyScrewProps & RefAttributes<SVGSVGElement>>;

export default LightbulbFilamentWavyScrew;
export { LightbulbFilamentWavyScrew };
