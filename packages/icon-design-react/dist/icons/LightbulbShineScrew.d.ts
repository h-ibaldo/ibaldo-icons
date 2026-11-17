import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbShineScrewProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbShineScrew: ForwardRefExoticComponent<LightbulbShineScrewProps & RefAttributes<SVGSVGElement>>;

export default LightbulbShineScrew;
export { LightbulbShineScrew };
