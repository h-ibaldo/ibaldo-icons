import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Text3DHexagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Text3DHexagon: ForwardRefExoticComponent<Text3DHexagonProps & RefAttributes<SVGSVGElement>>;

export default Text3DHexagon;
export { Text3DHexagon };
