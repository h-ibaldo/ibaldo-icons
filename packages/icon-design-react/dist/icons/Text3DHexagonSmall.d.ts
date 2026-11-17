import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Text3DHexagonSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Text3DHexagonSmall: ForwardRefExoticComponent<Text3DHexagonSmallProps & RefAttributes<SVGSVGElement>>;

export default Text3DHexagonSmall;
export { Text3DHexagonSmall };
