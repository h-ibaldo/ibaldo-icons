import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXDoubleNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXDoubleNotch: ForwardRefExoticComponent<ChatStackXDoubleNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXDoubleNotch;
export { ChatStackXDoubleNotch };
