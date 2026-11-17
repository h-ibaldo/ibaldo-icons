import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WidgetXBlobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WidgetXBlob: ForwardRefExoticComponent<WidgetXBlobProps & RefAttributes<SVGSVGElement>>;

export default WidgetXBlob;
export { WidgetXBlob };
