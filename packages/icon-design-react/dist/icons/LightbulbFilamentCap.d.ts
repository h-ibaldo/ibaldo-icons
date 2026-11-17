import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbFilamentCapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbFilamentCap: ForwardRefExoticComponent<LightbulbFilamentCapProps & RefAttributes<SVGSVGElement>>;

export default LightbulbFilamentCap;
export { LightbulbFilamentCap };
