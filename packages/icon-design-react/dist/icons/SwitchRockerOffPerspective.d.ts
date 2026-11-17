import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchRockerOffPerspectiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchRockerOffPerspective: ForwardRefExoticComponent<SwitchRockerOffPerspectiveProps & RefAttributes<SVGSVGElement>>;

export default SwitchRockerOffPerspective;
export { SwitchRockerOffPerspective };
